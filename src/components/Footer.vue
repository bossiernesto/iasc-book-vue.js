<template>
  <div class="footer">
    <div class="container-fluid">
        <div class="row">
            <div class="year footer-col-rt col-md-6 col-lg-6 col-sm-6">
                © {{ new Date().getFullYear() }}- IASC
            </div>
            <div class="footer-col-lf col-md-6 col-lg-6 col-sm-6 right-flex">
                <a href="https://github.com/arquitecturas-concurrentes/iasc-book">
                    Fork me at github
                    <img src="~@/assets/github_logo.png" class='github-icon'>
                </a>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped>
  .footer {
    height: 2em;
    bottom: 0;
    color: #aaa;
    width: 100%;
    background-color: #333333;
    font-size: 0.9rem;
  }

  .github-icon {
    height: 15px;
    display: inline-block;
    margin-top: -5px;
}
</style>