#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:shravan@ohmyscript.com");
                    console.log("\nDone, see you soon.\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Ok, bye.\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("                                  Shravan Kumar B"),
    work: `${chalk.white("Software Developer")} ${chalk
        .hex("#2b82b2")
        .bold("MTS-II")}`,
    blog: chalk.gray("https://medium.com/") + chalk.whiteBright("@shravan20"),
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("imshravankb"),
    github: chalk.gray("https://github.com/") + chalk.green("shravan20"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("shravankb"),
    web: chalk.cyan("https://ohmyscript.com"),
    devCommunity: chalk.gray("https://dev.to/") + chalk.yellow("imshravan"),
    npx: chalk.green("npx") + " " + chalk.white("shravan20"),

    labelWork: chalk.white.bold("        Work:"),
    labelBlog: chalk.white.bold("      Medium:"),
    labeldevCommunity: chalk.white.bold("devCommunity:"),
    labelTwitter: chalk.white.bold("     Twitter:"),
    labelGitHub: chalk.white.bold("      GitHub:"),
    labelLinkedIn: chalk.white.bold("    LinkedIn:"),
    labelWeb: chalk.white.bold("         Web:"),    
    labelCard: chalk.white.bold("        Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        `${data.labelBlog}  ${data.blog}`,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        `${data.labeldevCommunity}  ${data.devCommunity}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        ``,
        ``,
        `${chalk.bold("About Me:")}`,
        `______________________________________________________________________________`,
        `${chalk.italic(
            "  Driven by Curiosity |     Forever Explorer    |   Love trying new things    "       
        )}`,
        ``,
        `${chalk.italic("     Bibliophilic     | I, sometimes write blog | Currently, Jr Software Dev  ")}`,
        `______________________________________________________________________________`,
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "cyan"
    }
);

console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);


prompt(questions).then(answer => answer.action());