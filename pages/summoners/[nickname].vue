<template>
  <div>
    <div>Nickname: {{ summoner.name }}</div>
    <div>Level: {{ summoner.summonerLevel }}</div>
    <div>Puuid: {{ summoner.puuid }}</div>
    <img :src="profileIcon" class="w-24 h-24">
    <div>
      <div>Matches</div>
      <ul>
        <li v-for="matchId in matchIds"
            :key="matchId">
          <NuxtLink :to="'/match/'+ matchId">
            {{ matchId }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SummonerDto = Summoner.SummonerDto;

const route = useRoute()
const nickname = route.params.nickname

const {data: summoner} = await useFetch<SummonerDto>(`/api/summoners/${nickname}`);
const profileIcon = ref(useProfileIcon(summoner.value.profileIconId))
const {data: matchIds} = await useFetch<string[]>(`/api/matches/by-puuid/${summoner.value.puuid}/ids`)
</script>
