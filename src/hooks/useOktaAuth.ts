import { useOktaAuth as realUseOktaAuth } from "@okta/okta-react";
import { useOktaAuth as mockUseOktaAuth } from "@/mocks/mockContexts/useOktaAuthMock.";

const useOktaAuth = process.env.STORYBOOK ? mockUseOktaAuth : realUseOktaAuth;

export { useOktaAuth };
