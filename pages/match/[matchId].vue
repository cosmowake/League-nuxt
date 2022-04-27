<template>
  <div class="px-20 mt-8">
    <div>Match id: {{ $route.params.matchId }}</div>
    <div>
      <div class="flex flex-row justify-evenly p-4" v-bind:class="{ 'bg-red-50': index === 0, 'bg-blue-50': index === 1 }" v-for="(team, index) in teamAll" :key="index" >
        <div class="basis-[20%]" v-for="participant in team" :key="participant.name">

          <NuxtLink :to="participant.summonerUrl" class="text-blue-700">
            <div>{{ participant.summonerName }}</div>
          </NuxtLink>
          <div>{{ participant.championName }}</div>
          <div>{{ participant.name }}</div>
          <div>{{ participant.kills }}/{{ participant.deaths }}/{{ participant.assists }}</div>
          <img :src="participant.image" class="w-16 h-16"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MatchDto = Match.MatchDto;

const route = useRoute()
const matchId = route.params.matchId

const {data: match} = await useAsyncData<MatchDto>(
    'match',
    () => $fetch(`/api/matches/${matchId}`)
)

const teamAll = computed(() => {
  const team1 = match.value.info.participants.filter(p => p.teamId === 100).map(p => {
    return {
      summonerName: p.summonerName,
      summonerUrl: `/summoners/${p.summonerName}`,
      name: p.championName,
      image: `https://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/${p.championName}.png`,
      kills: p.kills,
      deaths: p.deaths,
      assists: p.assists
    }
  })
  const team2 = match.value.info.participants.filter(p => p.teamId === 200).map(p => {
    return {
      summonerName: p.summonerName,
      summonerUrl: `/summoners/${p.summonerName}`,
      championName: p.championName,
      image: `http://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/${p.championName}.png`,
      kills: p.kills,
      deaths: p.deaths,
      assists: p.assists
    }
  })
  return [team1, team2]
});
</script>
