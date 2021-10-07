import { Command, command, metadata, param } from "clime";
import axios from "axios";
import { store } from "../store";
import { LanyardResponse } from "use-lanyard";
import git from "simple-git";
import { blue } from "colorette";

@command({ description: "Commits your currently playing song" })
export default class extends Command {
	@metadata
	async execute(
		@param({
			description: "Whether to run a dry run (no commit, just log command)",
			default: false,
		})
		dry?: boolean
	) {
		const config = store.read();

		const { data: lanyard } = await axios.get<LanyardResponse>(
			`https://api.lanyard.rest/v1/users/${config.discordId}`
		);

		if ("error" in lanyard) {
			throw new Error(lanyard.error.message);
		}

		const spotify = lanyard.data.spotify;

		if (!spotify) {
			throw new Error("You are not playing anything!");
		}

		console.log("You are listening to", blue(spotify.song));

		if (dry) {
			return;
		}

		await git(process.cwd()).add(".").commit(spotify.song);
	}
}
