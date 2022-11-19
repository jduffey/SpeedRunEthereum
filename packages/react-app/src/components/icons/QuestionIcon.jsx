/* eslint react/jsx-props-no-spreading: off */
// ☝️ we want this component to be usable with chakra props
import React from "react";
import { chakra, useColorMode } from "@chakra-ui/react";

const QuestionIcon = props => {
  const { colorMode } = useColorMode();

  return (
    <chakra.svg width="44" height="44" {...props} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M43.3266 4.63367H41.2701V39.6749H43.3266V4.63367Z"
        fill={colorMode === "light" ? "#026262" : "#C8F5FF"}
      />
      <path
        d="M41.2703 39.6749H39.2003V41.7449H41.2703V39.6749Z"
        fill={colorMode === "light" ? "#026262" : "#C8F5FF"}
      />
      <path
        d="M41.2703 2.56372H39.2003V4.63372H41.2703V2.56372Z"
        fill={colorMode === "light" ? "#026262" : "#C8F5FF"}
      />
      <path
        d="M39.2002 41.7449H4.15906V43.8013H39.2002V41.7449Z"
        fill={colorMode === "light" ? "#026262" : "#C8F5FF"}
      />
      <path
        d="M37.1437 33.4919H35.0872V35.5484H33.0172V37.6184H35.0872V39.6749H37.1437V37.6184H39.2002V35.5484H37.1437V33.4919Z"
        fill={colorMode === "light" ? "#026262" : "#C8F5FF"}
      />
      <path
        d="M37.1437 4.63367H35.0872V6.69014H33.0172V8.74661H35.0872V10.8166H37.1437V8.74661H39.2002V6.69014H37.1437V4.63367Z"
        fill={colorMode === "light" ? "#026262" : "#C8F5FF"}
      />
      <path
        d="M28.9044 8.74654H26.8344V6.69006H16.5249V8.74654H14.4685V10.8165H12.412V16.9995H16.5249V12.873H18.5949V10.8165H22.7079V12.873H24.7779V16.9995H22.7079V19.056H20.6514V21.126H18.5949V25.2389H24.7779V23.1824H26.8344V21.126H28.9044V19.056H30.9608V10.8165H28.9044V8.74654Z"
        fill={colorMode === "light" ? "#026262" : "#C8F5FF"}
      />
      <path
        d="M24.7778 27.309H18.5948V29.3654H16.5248V35.5484H18.5948V37.6184H24.7778V35.5484H26.8343V29.3654H24.7778V27.309Z"
        fill={colorMode === "light" ? "#026262" : "#C8F5FF"}
      />
      <path
        d="M8.28553 33.4919H6.21553V35.5484H4.15906V37.6184H6.21553V39.6749H8.28553V37.6184H10.342V35.5484H8.28553V33.4919Z"
        fill={colorMode === "light" ? "#026262" : "#C8F5FF"}
      />
      <path
        d="M8.28553 4.63367H6.21553V6.69014H4.15906V8.74661H6.21553V10.8166H8.28553V8.74661H10.342V6.69014H8.28553V4.63367Z"
        fill={colorMode === "light" ? "#026262" : "#C8F5FF"}
      />
      <path
        d="M39.2002 0.507202H4.15906V2.56367H39.2002V0.507202Z"
        fill={colorMode === "light" ? "#026262" : "#C8F5FF"}
      />
      <path
        d="M4.15877 39.6749H2.10229V41.7449H4.15877V39.6749Z"
        fill={colorMode === "light" ? "#026262" : "#C8F5FF"}
      />
      <path
        d="M4.15877 2.56372H2.10229V4.63372H4.15877V2.56372Z"
        fill={colorMode === "light" ? "#026262" : "#C8F5FF"}
      />
      <path
        d="M2.10259 4.63367H0.0325928V39.6749H2.10259V4.63367Z"
        fill={colorMode === "light" ? "#026262" : "#C8F5FF"}
      />
    </chakra.svg>
  );
};

export default QuestionIcon;
