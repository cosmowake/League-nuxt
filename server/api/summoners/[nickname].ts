import {useRiotFetch} from "~/composables/useRiotFetch";
import {defineHandler} from "h3";

export default defineHandler(async (req, res) => {
    const nickname = res.event.context.params.nickname;
    const data = await useRiotFetch(`/lol/summoner/v4/summoners/by-name/${nickname}`, 'ru');

    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify(data));
    res.end();
})
