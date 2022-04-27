export const useRiotFetch = (url: string, region: string, fetchOptions: any = {}) => {
    const apiKey = process.env.RIOT_API_KEY

    console.log('useRiotFetch url', url)

    return $fetch(url, {
      baseURL: `https://${region}.api.riotgames.com`,
      ...fetchOptions,
      headers: {
        'X-Riot-Token': `${apiKey}`,
        ...fetchOptions.headers
      }
    })
}
