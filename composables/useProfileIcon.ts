export const useProfileIcon = (profileIconId) => {
    const lolCurrentVersion = useCurrentVersion()
    return `http://ddragon.leagueoflegends.com/cdn/${lolCurrentVersion}/img/profileicon/${profileIconId}.png`
}
