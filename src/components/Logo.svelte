<script>
    export let mobile;
</script>
<div>
    <img class="logo" src="/media/logo_Mistral.png" alt="flint band logo" />
    <div class="{mobile? "mobile":"desk"}" ></div>
</div>

<style>
    .logo {
        position: fixed;
        top: 15%;
        width: 30%
    }

    .desk{
        width: 35vw;
        filter: drop-shadow(5px 5px 3px rgb(53, 75, 71));
    }
    .mobile{
        width: 40vw;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 2;
        
    }
    @media screen and (max-width: 450px) {
        .logo {
            width: 45%;
            top: 0%;
        }
    }
</style>