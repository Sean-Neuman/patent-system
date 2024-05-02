// ProfilePage.js
import React from "react";
import { PageContainer, Title, PatentList } from "../components/StyledProfile";
import PatentCard from "../components/PatentCard";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../styles/theme";
import { GlobalStyles } from "../styles/GlobalStyles";
import Navbar from "@/components/Navbar";
import patents from "@/mockPatents";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useSigner, useAddress, useStorage } from "@thirdweb-dev/react";
import MPATABI from "@/library/MPAT.json";


export default function ProfilePage() {

  const [nfts, setNfts] = useState([]);
 
  const storage = useStorage();
  const signer = useSigner();
  const connectedAddress = useAddress();

  useEffect(() => {
    const asyncFunc = async () => {
      if (!signer) {
        return;
      }
      try {
        const contract = new ethers.Contract(
          "0xd0681465bf34587bea8fe94ccb52afa3b7f7fcd3",
          MPATABI,
          signer
        );

        const tokenURIs = await contract.getAllTokenURIsByAddress(signer.getAddress());
        const dataPromise = tokenURIs.map(async (uri, index) => {
          const data = await storage.download(uri);
          const metadata = await fetch(data.url);
          const finalNFT = await metadata.json();
          finalNFT.id = index;
          return finalNFT;
        });
        const allNFTs = await Promise.all(dataPromise);
        setNfts(allNFTs);
        console.log(allNFTs);
    
      } catch (err) {
        console.log(err);
      }
    };
    asyncFunc();
  }, [signer, connectedAddress]);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
     
        <PageContainer>
          <Title>User's Patents</Title>
          <PatentList>
            {nfts.map((patent) => (
              <PatentCard patent={patent} />
            ))}
          </PatentList>
        </PageContainer>
      </ThemeProvider>
    </>
  );
}
