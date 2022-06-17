#! /usr/bin/env node
import open from "open"
import fetch from "node-fetch"
import yargs from "yargs"

const { argv } = yargs(process.argv)

const response = await fetch("https://www.reddit.com/.json")
const data = await response.json()
const randomIndex = Math.floor(
  Math.random() * data.data.children.length
)

const post = data.data.children[randomIndex]

if (argv.print) {
  console.log(`
    Title: ${post.data.title}\n
    Link: ${post.data.permalink}
  `)
} else {
  open(`https://reddit.com${post.data.permalink}`)
}

// reddit cli package
