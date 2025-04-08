"use client";

import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  const { writeContractAsync: writeETHAraguaAsync } = useScaffoldWriteContract({ contractName: "ETHAragua" });

  const handleClaim = async () => {
    try {
      console.log("akfdn");
      await writeETHAraguaAsync({
        functionName: "safeMint",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex items-center flex-col gap-10 pt-10">
        <h1 className="text-2xl font-semibold">ETH Aragua NFT de asistencia</h1>
        <div>
          <div className="card bg-base-100 w-[350px] shadow-lg">
            <div className="p-4 border-b-4 flex items-center w-full justify-center">
              <img
                src="https://ipfs.io/ipfs/QmZtCVTcVC1q2qQ5HcGG8FJckghTArYzV7F8QsM3kwByMT"
                alt="ETH Aragua"
                width={250}
                height={250}
              />
            </div>
            <div className="card-body">
              <h2 className="text-center font-semibold text-lg">ETH ARAGUA NFT</h2>
            </div>
          </div>
        </div>

        <div>
          <button onClick={handleClaim} className="btn btn-primary w-[200px]" disabled={!connectedAddress}>
            Reclamar NFT
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
