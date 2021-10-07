import { Command, command, metadata, param } from "clime";
import { store } from "../store";

@command({ description: "Creates a commitify config file" })
export default class extends Command {
	@metadata
	async execute(
		@param({ description: "The discord id to setup a file to", required: true })
		discordId: string
	) {
		store.write({ discordId });
	}
}
