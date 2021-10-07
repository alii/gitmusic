#!/usr/bin/env node

import * as Path from "path";
import { CLI, Shim } from "clime";

const cli = new CLI("gitmusic", Path.join(__dirname, "commands"));

const shim = new Shim(cli);
shim.execute(process.argv);
