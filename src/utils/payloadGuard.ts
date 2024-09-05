import { AuthPayload } from "../redux/types/auth";
import { RegisterRequest } from "../types/auth";

const isRegisterRequest = (object: AuthPayload): object is RegisterRequest => {
  return (object as RegisterRequest).login !== undefined;
};

export default isRegisterRequest;
