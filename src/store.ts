import { existsSync, readFileSync, writeFileSync } from "fs";
import * as os from "os";
import * as path from "path";

interface Data {
	discordId: string;
}

export class Store {
	public static readonly location = path.join(os.homedir(), ".commitify.json");

	read() {
		const exists = existsSync(Store.location);

		if (!exists) {
			throw new Error("Config file does not exist. Please run setup command!");
		}

		const file = readFileSync(Store.location).toString("utf-8");
		return JSON.parse(file) as Data;
	}

	write(data: Data) {
		writeFileSync(Store.location, JSON.stringify(data));
	}

	set<T extends keyof Data>(key: T, data: Data[T], read?: Data) {
		const config = read ?? this.read();
		this.write({ ...config, [key]: data });
	}
}

export const store = new Store();
