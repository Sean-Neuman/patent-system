// src/components/ExplorePage.js
import React, { useState } from "react";
import patents from "../mockPatents";
import PatentCard from "../components/PatentCard";
import Navbar from "@/components/Navbar";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { darkTheme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { TextInput } from "@/components/StyledCreatePatent";
import { PatentList } from "@/components/StyledProfile";
import { useEffect } from "react";
import { ethers } from "ethers";
import { useSigner, useAddress, useStorage } from "@thirdweb-dev/react";
import MPATABI from "@/library/MPAT.json";


export default function Explore() {
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
        //connects to a contract
        const contract = new ethers.Contract(
          "0xd0681465bf34587bea8fe94ccb52afa3b7f7fcd3",
          MPATABI,
          signer
        );
        //gets all the token URIs
        const tokenURIs = await contract.getAllTokenURIs();
        //downloads the metadata for each token
        const dataPromise = tokenURIs.map(async (uri, index) => {
          const data = await storage.download(uri);
          const metadata = await fetch(data.url);
          const finalNFT = await metadata.json();
          finalNFT.id = index;
          return finalNFT;
        });
        //sets the state to all the NFTs
        const allNFTs = await Promise.all(dataPromise);
        setNfts(allNFTs);
        console.log(allNFTs);
    
      } catch (err) {
        console.log(err);
      }
    };
    asyncFunc();
  }, [signer, connectedAddress]);

  const [searchTerm, setSearchTerm] = useState("");
//filters the patents based on the search term
  const filteredPatents = nfts.filter((nft) =>
    nft.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <div>
          <TextInput
            type="text"
            placeholder="Search patents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ padding: "10px", margin: "10px" }}
          />
          <PatentList>
            {filteredPatents.map((nfts) => (
              <PatentCard key={nfts.id} patent={nfts} />
            ))}
          </PatentList>
        </div>
      </ThemeProvider>
    </>
  );
}
