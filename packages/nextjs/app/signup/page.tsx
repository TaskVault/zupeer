"use client";

import { useCallback, useState } from "react";
import { zuAuthPopup } from "@pcd/zuauth";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { notification } from "~~/utils/scaffold-eth";
import { ETHPRAGUE_ZUAUTH_CONFIG } from "~~/utils/zupassConstants";

// Get a valid event id from { supportedEvents } from "zuauth" or https://api.zupass.org/issue/known-ticket-types
const fieldsToReveal = {
  revealAttendeeEmail: true,
  revealEventId: true,
  revealProductId: true,
};

const Signup: NextPage = () => {
  const [verifiedFrontend, setVerifiedFrontend] = useState(false);

  const { address: connectedAddress } = useAccount();
  const [pcd, setPcd] = useState<string>();

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const register = async () => {
    notification.info("registred successfully");
  };

  const getProof = useCallback(async () => {
    if (!connectedAddress) {
      notification.error("Please connect wallet");
      return;
    }
    const result = await zuAuthPopup({ fieldsToReveal, watermark: connectedAddress, config: ETHPRAGUE_ZUAUTH_CONFIG });
    if (result.type === "pcd") {
      setPcd(JSON.parse(result.pcdStr).pcd);
      console.log("PCD", result.pcdStr);
    } else {
      notification.error("Failed to parse PCD");
    }
  }, [connectedAddress]);

  return (
    <>
      <div className="flex flex-col items-center mt-24">
        {/* proov you are hacker with zupass */}
        <h2 className="text-2xl font-bold">Zupass Proof</h2>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <p>Verify your mentor credentials to signup</p>
            <button className="btn btn-secondary w-full tooltip" onClick={getProof} disabled={!!pcd}>
              {!pcd ? "Get Proof" : "Proof Received!"}
            </button>
          </div>
        </div>

        <h1 className="text-5xl font-bold mt-10">Signup As mentor</h1>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Name"
                className="input input-primary"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <textarea
                placeholder="Expertise"
                className="textarea textarea-primary"
                value={bio}
                onChange={e => setBio(e.target.value)}
              ></textarea>

              <a className="btn btn-primary disabled" href="/quest">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
