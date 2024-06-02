#  👉👈 Zupeer : Hackathon mentoring made easy!

Built with (SE2 Starter Kit)

Our goal is to remove the barriers standing in the way of bringing mentors and hackers together in a quick and convenient way to fully maximize the potential of their project and hacking experience.

This is how "The problem it solves" looks like rn

For Hackers/Teams:
• Requesting and getting Mentor support can take a long time.
• Hard to know upfront if a Mentor has the skills to help with a request.
• Not enough mentors available.

For Mentors:
• Can be requested by Hackers/Teams based on person, not skill.
• Mentoring can be a volunteer role without any reward.

Why is the Telegram Channel Not Good Enough?
• Unclear when a question is solved or what the status is.
• Unsorted feed.
• Multiple places to ask the question.
• Too many hurdles to finding a mentor; takes too much time, underutilizes the potential to find a mentor.
• Imposter syndrome (feeling that the problem is not big enough to ask for help).
• Unclear what each mentor is an expert on.
• Unclear which mentor is nearest/most available.

The Solution
• The platform allows anyone to become a mentor and provide support to their peers.
• A reputation system rewards mentors for their contributions.
• Using Zupass, etc., to seamlessly connect participants.
• Hackers can see a list of Mentors with skills in profiles.
• Provides an integrated platform that can be used at future hackathons, serving as a first stop for hackers to post questions and receive responses and help on individual requests. The mentors, on the other side, can view where they are needed most and coordinate accordingly.

Get started with [Zupass](https://github.com/proofcarryingdata/zupass) to generate proofs & verify PCDs (Proof-Carrying Data).

In this Starter Kit you'll find an example of how to generate a proof and verify it on the backend.

-   **Frontend** (check `packages/nextjs/pages/index.tsx`):
    -   Using `zuauth` we generate a popup where you can generate a proof in your Zupass account.
    -   It then sends the PCD to the backend.
-   **Backend** (check `packages/nextjs/pages/api/verify.ts`):
    -   Verifies the proof received from the frontend.
    -   If the proof is valid, it sends 1 ETH to the connected wallet address.

---

![Workflow](.github/img/workflow.png)

---

Before you begin, you need to install the following tools:

-   [Node (>= v18.17)](https://nodejs.org/en/download/)
-   Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
-   [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-ETH 2, follow the steps below:

1. Clone this repo & install dependencies

1. Clone the repo

```bash
git clone https://github.com/abdoMous/zupeer
cd zupeer
```

2. Install dependencies

```bash
yarn install
```

3. Start the local hardhat chain

```bash
yarn chain
```

4. On a second terminal, deploy the contracts

```bash
yarn deploy
```

5. Start the frontend

```bash
yarn start
```

Visit your app on http://localhost:3000/

### Resources

🎥 [Watch the BG & Zupass team first zoom meeting here](https://youtu.be/kwACdt3gRms)
🎥 [Watch the BG & Zupass team second zoom meeting here](https://www.youtube.com/watch?v=yY7XdaCjC7I)

Some links mentioned in the video

https://github.com/proofcarryingdata/zupass

part1)
https://github.com/proofcarryingdata/zupass/blob/main/apps/passport-server/src/services/telegramService.ts#L1104

part2)
https://github.com/proofcarryingdata/zupass/blob/main/apps/passport-server/src/services/telegramService.ts#L554

part3)
https://github.com/proofcarryingdata/zupass/blob/main/apps/passport-server/src/services/telegramService.ts#L736

https://github.com/odyslam/zuzalu-oracle/blob/master/src/ZuzaluOracle.sol
https://api.zupass.org/issue/known-ticket-types
https://github.com/iden3/snarkjs
https://github.com/cedoor/zuauth
https://github.com/cedoor/zuauth/tree/main#-tutorial
https://www.npmjs.com/package/@pcd/passport-interface
https://www.npmjs.com/package/@pcd/zk-eddsa-event-ticket-pcd
https://www.npmjs.com/package/@pcd/eddsa-ticket-pcd
https://www.npmjs.com/package/@pcd/semaphore-identity-pcd
https://www.npmjs.com/package/@pcd/eddsa-ticket-pcd

This is forked from EthBerlin Zupass Starterkit: https://github.com/BuidlGuidl/ethberlin-zupass-starterkit

# zupeer
