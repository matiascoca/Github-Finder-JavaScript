class Github {
  constructor() {
    // Best practice for production is to have the client_id and client_secret in another server and access them from here. 
    // This way exposes our data because is hardcoded within the code.
    // You can obtain client_id and client_secret from https://developer.github.com/
    
    this.client_id = ""; // Put client_id to test the project 
    this.client_secret = ""; // Put client_secret to test the project
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
