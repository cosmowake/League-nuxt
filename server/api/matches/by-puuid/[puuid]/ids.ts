import {useRiotFetch} from "~/composables/useRiotFetch";
import {defineHandler} from "h3";

export default defineHandler(async (req, res) => {
    const puuid = res.event.context.params.puuid;
    const data = await useRiotFetch(`/lol/match/v5/matches/by-puuid/${puuid}/ids`, 'europe');

    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));
    res.end();
})
