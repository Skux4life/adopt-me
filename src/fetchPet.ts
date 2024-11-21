import { QueryFunction } from "@tanstack/react-query";
import { PetAPIResponse } from "./APIResponseTypes";

const fetchPet: QueryFunction<PetAPIResponse, ["details", string]> = async ({
  queryKey,
}) => {
  const id = queryKey[1];
  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (apiRes.ok) {
    return apiRes.json();
  } else {
    throw new Error(`details/${id} fetch not ok`);
  }
};
export default fetchPet;
