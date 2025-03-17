import apiServer from "../sharedLib/serverAxiosHelper";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

//getTemplateOrganisation
export const GET = async () => {
  const endpoint = "/identity/api/v1/Organisations/GetTemplateOrganisations";

  try {
    const response = await apiServer.get(endpoint);
    console.log("response in back end", response);
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(error);
  }
};

//createorgfromtemplate
export const POST = async (req: NextRequest) => {
  const endpoint =
    "/identity/api/v1/Organisations/CreateOrganisationFromTemplate";

  try {
    const body = await req.json();
    const response = await apiServer.post(endpoint, body);

    return NextResponse.json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
    }
  }
};
