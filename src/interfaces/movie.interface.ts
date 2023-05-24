export interface IMovieResponse {
    docs: IMovie[]
    total: number
    limit: number
    offset: number
    page: number
    pages: number
}

export interface IMovie {
    _id: string
    name: string
    runtimeInMinutes: number
    budgetInMillions: number
    boxOfficeRevenueInMillions: number
    academyAwardNominations: number
    academyAwardWins: number
    rottenTomatoesScore: number
}
