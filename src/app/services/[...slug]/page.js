import SingleService from "~/components/section/services/single-service";
import { Suspense } from "react";
import { getSingleService } from "~/utils/api";
import { replaceTemplateVars } from "~/utils/replaceTemplateVars";
import { notFound, redirect } from "next/navigation";

async function getServiceData(slug) {
  try {
    const singlePost = await getSingleService(slug);
    return singlePost;
  } catch (error) {
    notFound();
    // TODO : redirect to base route
  }
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;

  const route = resolvedParams?.slug || [];

  const slug = route.join("/");

  let pre = null;
  let serviceSlug = null;
  let locationText = null;
  let post = null;

  if (route.length === 1) {
    // /services/web-development
    serviceSlug = route[0];
  } else if (route.length === 2) {
    // /services/best/web-development
    pre = route[0];
    serviceSlug = route[1];
  } else if (route.length === 3) {
    // /services/best/web-development/delhi
    pre = route[0];
    serviceSlug = route[1];
    locationText = route[2];
  } else if (route.length === 4) {
    // /services/best/web-development/delhi/post
    pre = route[0];
    serviceSlug = route[1];
    locationText = route[2];
    post = route[3];
  }
  const serviceDetails = await getServiceData(slug);

  if (!serviceDetails) {
    return {
      title: "Service Not Found 😕",
      description: "The requested blog post could not be found.",
    };
  }
  const title = replaceTemplateVars(serviceDetails?.heading, {
    pre: pre,
    loc: serviceDetails?.location,
  });

  const description = replaceTemplateVars(serviceDetails?.description, {
    pre: pre,
    loc: serviceDetails?.location,
  });

  return {
    title,
    description: serviceDetails.description,
    openGraph: {
      title: serviceDetails.heading,
      description,
      type: "article",
      // images: [
      //   {
      //     url: serviceDetails?.thumbnail?.url,
      //     alt: serviceDetails?.thumbnail?.alt,
      //     width: 1200,
      //     height: 630,
      //   },
      // ],
    },

    twitter: {
      card: "summary_large_image",
      title: serviceDetails.heading,
      description: serviceDetails.description,
    },

    // for page
    details: serviceDetails,

    pre: pre,
    service: serviceSlug,
    loc: locationText,
    post: post,
  };
}

export default async function SingleServicePage({ params }) {
  const data = await generateMetadata({ params });
  const serviceDetails = data?.details;
  const { pre, service, loc, post } = data;
  const { location } = serviceDetails;
  if (!serviceDetails) {
    // notFound();
  }
  const finalHeading = replaceTemplateVars(serviceDetails?.heading, {
    pre: pre,
    loc: location,
  });

  const finalSubHeading = replaceTemplateVars(serviceDetails?.subHeading, {
    pre: pre,
    loc: location,
  });

  const finalDescription = replaceTemplateVars(serviceDetails?.description, {
    pre: pre,
    loc: location,
  });

  if (
    (loc && (!location || location.toLowerCase() !== loc.toLowerCase())) ||
    (pre &&
      (!serviceDetails?.pre ||
        serviceDetails?.pre.toLowerCase() !== pre.toLowerCase())) ||
    (post &&
      (!serviceDetails?.post ||
        serviceDetails?.post.toLowerCase() !== post.toLowerCase()))
  ) {
    redirect(`/services/${service}`);
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="w-full">
        <SingleService
          subHeading={finalSubHeading}
          description={finalDescription}
          heading={finalHeading}
          pre={pre}
          post={post}
          serviceDetails={serviceDetails || {}}
        />
      </main>
    </Suspense>
  );
}
