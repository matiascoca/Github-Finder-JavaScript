class Github {
  constructor() {
    // Best practice for production is to have the client_id and client_secret in another server and access them from here. This way exposes our data because is hardcoded within the code.
    this.client_id = "3109d92a71ef2dc95571";
    this.client_secret = "16fa8cf3fc94e9985a3cea5a2d0db0141bdf9f47";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
}
