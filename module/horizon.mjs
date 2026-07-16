Hooks.once("init", async function () {
	console.log("USR Horizon | Initializing USR Horizon Module");

	// Update the skill traits in the configuration
	CONFIG.usr.traits.skills = [
		"medicine",
		"engineering",
		"survival",
		"subterfuge",
		"presence",
		"connect",
		"artisan",
		"administer",
		"academics",
		"piloting",
		"driving",
	];

	// Define specializations for the new and updated traits
	CONFIG.usr.specializations.presence = {
		persuasion: "USR.SpecPersuasion",
		intimidation: "USR.SpecIntimidation",
		leadership: "USR.SpecLeadership",
		entertainment: "USR.SpecEntertainment",
		diplomacy: "USR.SpecDiplomacy",
		deception: "USR.SpecDeception",
	};

	CONFIG.usr.specializations.connect = {
		streetwise: "USR.SpecStreetwise",
		trading: "USR.SpecTrading",
		underworld: "USR.SpecUnderworld",
		contacts: "USR.SpecContacts",
	};

	CONFIG.usr.specializations.artisan = {
		fabrication: "USR.SpecFabrication",
		electronics: "USR.SpecElectronics",
		mechanical: "USR.SpecMechanical",
		chemistry: "USR.SpecChemistry",
		cooking: "USR.SpecCooking",
	};

	CONFIG.usr.specializations.administer = {
		bureaucracy: "USR.SpecBureaucracy",
		law: "USR.SpecLaw",
		accounting: "USR.SpecAccounting",
		management: "USR.SpecManagement",
	};

	CONFIG.usr.specializations.academics = {
		history: "USR.SpecHistory",
		science: "USR.SpecScience",
		xenobiology: "USR.SpecXenobiology",
		research: "USR.SpecResearch",
		languages: "USR.SpecLanguages",
	};

	CONFIG.usr.specializations.piloting = {
		starships: "USR.SpecStarships",
		atmospheric: "USR.SpecAtmospheric",
		astrogation: "USR.SpecAstrogation",
		sensors: "USR.SpecSensors",
	};

	CONFIG.usr.specializations.driving = {
		starships: "USR.SpecWheeled",
		atmospheric: "USR.SpecTracked",
		astrogation: "USR.SpecHover",
		sensors: "USR.SpecHeavy",
	};

	// Update existing ones for sci-fi context
	CONFIG.usr.specializations.engineering = {
		computers: "USR.SpecComputers",
		robotics: "USR.SpecRobotics",
		cybernetics: "USR.SpecCybernetics",
		powerSystems: "USR.SpecPowerSystems",
		structural: "USR.SpecStructural",
		explosives: "USR.SpecExplosives",
	};

	CONFIG.usr.specializations.ranged = {
		pistols: "USR.SpecPistols",
		rifles: "USR.SpecRifles",
		shotguns: "USR.SpecShotguns",
		lasers: "USR.SpecLasers",
		bows: "USR.SpecBows",
		thrown: "USR.SpecThrown",
		heavyWeapons: "USR.SpecHeavyWeapons",
	};

	CONFIG.usr.specializations.survival.hostileEnvironments =
		"USR.SpecHostileEnvironments";

	CONFIG.usr.specializations.mobility.microGravity = "USR.SpecMicroGravity";

	// Update the trait max for the sci-fi setting
	CONFIG.usr.traitMax = 6;
});
