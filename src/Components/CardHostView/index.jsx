import { Button } from "@material-ui/core";
import {
  Buttons,
  ContainerCard,
  ContainerImageAndName,
  ContainerTextAndButtons,
  ImageCard,
  TextCard,
} from "./style";

export const CardHostView = () => {
  return (
    <ContainerCard>
      <ContainerImageAndName>
        <ImageCard />
        <h3>nome</h3>
        <h4>localidade</h4>
        <Buttons>
          <Button
            size="small"
            variant="contained"
            color="primary"
            className="aceitar buttonStyle button-desktop"
          >
            Reservar
          </Button>
        </Buttons>
      </ContainerImageAndName>

      <ContainerTextAndButtons>
        <TextCard>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium. Sed ut perspiciatis unde
            omnisiste natus error. Sed ut perspiciatis unde omnisiste natus
            error.Sed ut perspiciatis unde omnisiste natus error.
          </p>
        </TextCard>
        <Buttons>
          <Button
            size="small"
            variant="contained"
            color="primary"
            className="aceitar buttonStyle button-mobile"
          >
            Reservar
          </Button>
        </Buttons>
      </ContainerTextAndButtons>
    </ContainerCard>
  );
};
