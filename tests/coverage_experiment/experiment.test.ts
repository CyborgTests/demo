// import test from "@cyborgtests/test";
// import { OWNER } from "../../tags";
// const MCR = require("monocart-coverage-reports");

// test(
//   "homepage load and branding",
//   {
//     annotation: [
//       {
//         type: "objective",
//         description:
//           "Verify that the homepage loads correctly and displays essential branding elements",
//       },
//     ],
//     tag: [OWNER.O_KHOTEMSKYI],
//   },
//   async ({ page, manualStep }) => {
//     await Promise.all([
//       page.coverage.startJSCoverage({
//         resetOnNavigation: false,
//       }),
//       page.coverage.startCSSCoverage({
//         resetOnNavigation: false,
//       }),
//     ]);
//     await page.goto("/");
//     await manualStep("Navigate to the homepage");
//     await manualStep(
//       "Observe the presence of the site logo and main navigation menu"
//     );
//     await manualStep(
//       "Verify the homepage loads without errors, displaying the site logo and navigation menu prominently"
//     );
//     const [jsCoverage, cssCoverage] = await Promise.all([
//       page.coverage.stopJSCoverage(),
//       page.coverage.stopCSSCoverage(),
//     ]);
//     const coverageData = [...jsCoverage, ...cssCoverage];

//     const coverageReport = MCR({
//       name: "My Coverage Report",
//       outputDir: "./coverage-reports",
//       reports: ["v8", "console-details"],
//     });
//     await coverageReport.add(coverageData);
//     await coverageReport.generate();
//   }
// );
