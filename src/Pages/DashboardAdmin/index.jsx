import { Container, SectionCards } from "./style";
import WaitingList from "../../Components/WaitingHost";

const DashboardAdmin = () => {
  return (
    <Container>
      <SectionCards>
        <WaitingList />
      </SectionCards>
    </Container>
  );
};

export default DashboardAdmin;
