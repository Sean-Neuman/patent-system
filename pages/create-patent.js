import React, { useEffect, useState } from "react";
import {
  FormContainer,
  Form,
  Label,
  TextInput,
  TextArea,
  FileInput,
  SubmitButton,
} from "../components/StyledCreatePatent";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyles } from "../styles/GlobalStyles";
import Navbar from "../components/Navbar";
//import { ThirdwebStorage } from "thirdweb";
import { ethers } from "ethers";
import {
  useSigner,
  useAddress,
  useStorage,
  useStorageUpload,
} from "@thirdweb-dev/react";
import MPATABI from "@/library/MPAT.json";

export default function CreatePatentPage() {
  const [patentTitle, setPatentTitle] = useState("");
  const [description, setDescription] = useState("");
  const [blueprint, setBlueprint] = useState(null);
  const [isMinting, setIsMinting] = useState(false);
  const [isMinted, setIsMinted] = useState(false);
  const storage = useStorage();
  const connectedAddress = useAddress();
  const signer = useSigner();

  async function mintNFT() {
    if (!signer) {
      return;
    }
    setIsMinting(true);
    try {
      const metadata = {
        title: patentTitle,
        creator: connectedAddress,
        description: description,
        // image: imageGenerated.url
      };
      const contract = new ethers.Contract(
        "0xd0681465bf34587bea8fe94ccb52afa3b7f7fcd3",
        MPATABI,
        signer
      );
      const url = await storage.upload(metadata);
      const tx = await contract.safeMint(connectedAddress, url);
      await tx.wait();
      setIsMinting(false);
      setIsMinted(true);
    } catch (err) {
      setIsMinting(false);
      console.log(err);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Process form data here.
    console.log({ patentTitle, description, blueprint });
    mintNFT();
    // use IPFS to upload the blueprint
    //thirdweb storage for pinning
    //var result = await ThirdwebStorage.Upload(client, "{{path/to-file}}");
  };

  const handleBlueprintChange = (e) => {
    setBlueprint(e.target.files[0]);
  };

  // const [theme, setTheme] = useState("light");

  // const toggleTheme = () => {
  //   if (theme === "light") {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />

        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="patentTitle">Title</Label>
            <TextInput
              id="patentTitle"
              value={patentTitle}
              onChange={(e) => setPatentTitle(e.target.value)}
              required
            />

            <Label htmlFor="description">Description</Label>
            <TextArea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            {/* <Label htmlFor="blueprint">Blueprint Upload</Label>
            <FileInput
              id="blueprint"
              type="file"
              onChange={handleBlueprintChange}
              required
            /> */}

            <SubmitButton onClick={handleSubmit} type="submit">
              Submit Patent
            </SubmitButton>
          </Form>
        </FormContainer>
      </ThemeProvider>
    </>
  );
}
