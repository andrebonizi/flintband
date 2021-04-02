<script>
    export let mobile;
</script>
<div>
    <img class="{mobile? "mobile":"desk"}" src="/image/logo_Mistral.png" alt="flint band logo" />
</div>

<style>
    .desk{
        width: 45vw;
    }
    .mobile{
        width: 40vw;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 2;
    }
</style>