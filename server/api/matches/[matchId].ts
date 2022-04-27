import {useRiotFetch} from "~/composables/useRiotFetch";
import {defineHandler} from "h3";

export default defineHandler(async (req, res) => {
    const matchId = res.event.context.params.matchId;
    const data = await useRiotFetch(`/lol/match/v5/matches/${matchId}`, 'europe');

    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify(data));
    res.end();
})
