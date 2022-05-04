import { TokenProvider } from "./Token";
import { AuthenticationProvider } from "./Authentication";
import { UserInfoProvider } from "./infoProvider";
import { HostProvider } from "./Host";
import { PetsProvider } from "./PetsProviders";
import { ServicesProvider } from "./Services";

const Providers = ({ children }) => {
  return (
    <TokenProvider>
      <HostProvider>
        <UserInfoProvider>
          <AuthenticationProvider>
            <PetsProvider>
              <ServicesProvider>{children}</ServicesProvider>
            </PetsProvider>
          </AuthenticationProvider>
        </UserInfoProvider>
      </HostProvider>
    </TokenProvider>
  );
};

export default Providers;
