declare module Match {

    export interface MetadataDto {
        dataVersion: string;
        matchId: string;
        participants: string[];
    }

    export interface ChallengesDto {
        "12AssistStreakCount": number;
        abilityUses: number;
        acesBefore15Minutes: number;
        alliedJungleMonsterKills: number;
        baronTakedowns: number;
        blastConeOppositeOpponentCount: number;
        bountyGold: number;
        buffsStolen: number;
        completeSupportQuestInTime: number;
        controlWardTimeCoverageInRiverOrEnemyHalf: number;
        controlWardsPlaced: number;
        damagePerMinute: number;
        damageTakenOnTeamPercentage: number;
        dancedWithRiftHerald: number;
        deathsByEnemyChamps: number;
        dodgeSkillShotsSmallWindow: number;
        doubleAces: number;
        dragonTakedowns: number;
        earliestDragonTakedown: number;
        earlyLaningPhaseGoldExpAdvantage: number;
        effectiveHealAndShielding: number;
        elderDragonKillsWithOpposingSoul: number;
        elderDragonMultikills: number;
        enemyChampionImmobilizations: number;
        enemyJungleMonsterKills: number;
        epicMonsterKillsNearEnemyJungler: number;
        epicMonsterKillsWithin30SecondsOfSpawn: number;
        epicMonsterSteals: number;
        epicMonsterStolenWithoutSmite: number;
        firstTurretKilledTime: number;
        flawlessAces: number;
        fullTeamTakedown: number;
        gameLength: number;
        goldPerMinute: number;
        hadAfkTeammate: number;
        hadOpenNexus: number;
        immobilizeAndKillWithAlly: number;
        initialBuffCount: number;
        initialCrabCount: number;
        jungleCsBefore10Minutes: number;
        junglerKillsEarlyJungle: number;
        junglerTakedownsNearDamagedEpicMonster: number;
        kTurretsDestroyedBeforePlatesFall: number;
        kda: number;
        killAfterHiddenWithAlly: number;
        killParticipation: number;
        killedChampTookFullTeamDamageSurvived: number;
        killsNearEnemyTurret: number;
        killsOnLanersEarlyJungleAsJungler: number;
        killsOnRecentlyHealedByAramPack: number;
        killsUnderOwnTurret: number;
        killsWithHelpFromEpicMonster: number;
        knockEnemyIntoTeamAndKill: number;
        landSkillShotsEarlyGame: number;
        laneMinionsFirst10Minutes: number;
        laningPhaseGoldExpAdvantage: number;
        legendaryCount: number;
        lostAnInhibitor: number;
        maxCsAdvantageOnLaneOpponent: number;
        maxKillDeficit: number;
        maxLevelLeadLaneOpponent: number;
        moreEnemyJungleThanOpponent: number;
        multiKillOneSpell: number;
        multiTurretRiftHeraldCount: number;
        multikills: number;
        multikillsAfterAggressiveFlash: number;
        mythicItemUsed: number;
        outerTurretExecutesBefore10Minutes: number;
        outnumberedKills: number;
        outnumberedNexusKill: number;
        perfectDragonSoulsTaken: number;
        perfectGame: number;
        pickKillWithAlly: number;
        poroExplosions: number;
        quickCleanse: number;
        quickFirstTurret: number;
        quickSoloKills: number;
        riftHeraldTakedowns: number;
        saveAllyFromDeath: number;
        scuttleCrabKills: number;
        skillshotsDodged: number;
        skillshotsHit: number;
        snowballsHit: number;
        soloBaronKills: number;
        soloKills: number;
        soloTurretsLategame: number;
        stealthWardsPlaced: number;
        survivedSingleDigitHpCount: number;
        survivedThreeImmobilizesInFight: number;
        takedownOnFirstTurret: number;
        takedowns: number;
        takedownsAfterGainingLevelAdvantage: number;
        takedownsBeforeJungleMinionSpawn: number;
        takedownsFirst25Minutes: number;
        takedownsInAlcove: number;
        takedownsInEnemyFountain: number;
        teamBaronKills: number;
        teamDamagePercentage: number;
        teamElderDragonKills: number;
        teamRiftHeraldKills: number;
        threeWardsOneSweeperCount: number;
        tookLargeDamageSurvived: number;
        turretPlatesTaken: number;
        turretTakedowns: number;
        turretsTakenWithRiftHerald: number;
        twentyMinionsIn3SecondsCount: number;
        unseenRecalls: number;
        visionScoreAdvantageLaneOpponent: number;
        visionScorePerMinute: number;
        wardTakedowns: number;
        wardTakedownsBefore20M: number;
        wardsGuarded: number;
        teleportTakedowns?: number;
        getTakedownsInAllLanesEarlyJungleAsLaner?: number;
        highestCrowdControlScore?: number;
        killsOnOtherLanesEarlyJungleAsLaner?: number;
        fasterSupportQuestCompletion?: number;
        baronBuffGoldAdvantageOverThreshold?: number;
        earliestBaron?: number;
        shortestTimeToAceFromFirstTakedown?: number;
        fastestLegendary?: number;
        highestChampionDamage?: number;
        highestWardKills?: number;
    }

    export interface StatPerksDto {
        defense: number;
        flex: number;
        offense: number;
    }

    export interface SelectionDto {
        perk: number;
        var1: number;
        var2: number;
        var3: number;
    }

    export interface StyleDto {
        description: string;
        selections: SelectionDto[];
        style: number;
    }

    export interface PerksDto {
        statPerks: StatPerksDto;
        styles: StyleDto[];
    }

    export interface ParticipantDto {
        assists: number;
        baronKills: number;
        bountyLevel: number;
        challenges: ChallengesDto;
        champExperience: number;
        champLevel: number;
        championId: number;
        championName: string;
        championTransform: number;
        consumablesPurchased: number;
        damageDealtToBuildings: number;
        damageDealtToObjectives: number;
        damageDealtToTurrets: number;
        damageSelfMitigated: number;
        deaths: number;
        detectorWardsPlaced: number;
        doubleKills: number;
        dragonKills: number;
        firstBloodAssist: boolean;
        firstBloodKill: boolean;
        firstTowerAssist: boolean;
        firstTowerKill: boolean;
        gameEndedInEarlySurrender: boolean;
        gameEndedInSurrender: boolean;
        goldEarned: number;
        goldSpent: number;
        individualPosition: string;
        inhibitorKills: number;
        inhibitorTakedowns: number;
        inhibitorsLost: number;
        item0: number;
        item1: number;
        item2: number;
        item3: number;
        item4: number;
        item5: number;
        item6: number;
        itemsPurchased: number;
        killingSprees: number;
        kills: number;
        lane: string;
        largestCriticalStrike: number;
        largestKillingSpree: number;
        largestMultiKill: number;
        longestTimeSpentLiving: number;
        magicDamageDealt: number;
        magicDamageDealtToChampions: number;
        magicDamageTaken: number;
        neutralMinionsKilled: number;
        nexusKills: number;
        nexusLost: number;
        nexusTakedowns: number;
        objectivesStolen: number;
        objectivesStolenAssists: number;
        participantId: number;
        pentaKills: number;
        perks: PerksDto;
        physicalDamageDealt: number;
        physicalDamageDealtToChampions: number;
        physicalDamageTaken: number;
        profileIcon: number;
        puuid: string;
        quadraKills: number;
        riotIdName: string;
        riotIdTagline: string;
        role: string;
        sightWardsBoughtInGame: number;
        spell1Casts: number;
        spell2Casts: number;
        spell3Casts: number;
        spell4Casts: number;
        summoner1Casts: number;
        summoner1Id: number;
        summoner2Casts: number;
        summoner2Id: number;
        summonerId: string;
        summonerLevel: number;
        summonerName: string;
        teamEarlySurrendered: boolean;
        teamId: number;
        teamPosition: string;
        timeCCingOthers: number;
        timePlayed: number;
        totalDamageDealt: number;
        totalDamageDealtToChampions: number;
        totalDamageShieldedOnTeammates: number;
        totalDamageTaken: number;
        totalHeal: number;
        totalHealsOnTeammates: number;
        totalMinionsKilled: number;
        totalTimeCCDealt: number;
        totalTimeSpentDead: number;
        totalUnitsHealed: number;
        tripleKills: number;
        trueDamageDealt: number;
        trueDamageDealtToChampions: number;
        trueDamageTaken: number;
        turretKills: number;
        turretTakedowns: number;
        turretsLost: number;
        unrealKills: number;
        visionScore: number;
        visionWardsBoughtInGame: number;
        wardsKilled: number;
        wardsPlaced: number;
        win: boolean;
    }

    export interface BanDto {
        championId: number;
        pickTurn: number;
    }

    export interface BaronDto {
        first: boolean;
        kills: number;
    }

    export interface ChampionDto {
        first: boolean;
        kills: number;
    }

    export interface DragonDto {
        first: boolean;
        kills: number;
    }

    export interface InhibitorDto {
        first: boolean;
        kills: number;
    }

    export interface RiftHeraldDto {
        first: boolean;
        kills: number;
    }

    export interface TowerDto {
        first: boolean;
        kills: number;
    }

    export interface ObjectivesDto {
        baron: BaronDto;
        champion: ChampionDto;
        dragon: DragonDto;
        inhibitor: InhibitorDto;
        riftHerald: RiftHeraldDto;
        tower: TowerDto;
    }

    export interface TeamDto {
        bans: BanDto[];
        objectives: ObjectivesDto;
        teamId: number;
        win: boolean;
    }

    export interface InfoDto {
        gameCreation: number;
        gameDuration: number;
        gameEndTimestamp: number;
        gameId: number;
        gameMode: string;
        gameName: string;
        gameStartTimestamp: number;
        gameType: string;
        gameVersion: string;
        mapId: number;
        participants: ParticipantDto[];
        platformId: string;
        queueId: number;
        teams: TeamDto[];
        tournamentCode: string;
    }

    export interface MatchDto {
        metadata: MetadataDto;
        info: InfoDto;
    }

}
