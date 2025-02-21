import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="flex justify-center bg-gradient-to-r from-red-500 via-blue-500 to-teal-200">
        <CardContainer className="inter-var mt-20">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border">
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
              Front-end Developer and UI/UX Designer
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/profile-pa.jpg"
                height="300"
                width="300"
                className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ={50}
              className="text-lg font-bold text-neutral-600 dark:text-white mt-4">
              Piyush Aryan
            </CardItem>
            <div className="flex justify-between items-center mt-10">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl hover:bg-gray-700 hover:text-teal-500 bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                <Link href="https://www.linkedin.com/in/piyush-aryan/">Linkedin</Link>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var mt-20 ml-10">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border">
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
              Web3 and Blockchain Developer
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/profile-ak2.jpg"
                height="300"
                width="300"
                className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ={50}
              className="text-lg font-bold text-neutral-600 dark:text-white mt-4">
              Aniket Kumar
            </CardItem>
            <div className="flex justify-between items-center mt-10">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl hover:bg-gray-700 hover:text-teal-500 bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                <Link href="/">Home</Link>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </>
  );
};

export default About;
