<script>
    import { fly } from 'svelte/transition'; 
    import Icon from 'svelte-awesome';
    import { faNewspaper } from '@fortawesome/free-regular-svg-icons'
</script>

<div in:fly="{{ x: 200, duration: 2000 }}">
    <div class="content">
        <img src="image/home.jpg" alt="whole flint band together"/><br>
        <div class="flint">Flint.</div> is a Brisbane-based band taking rock for a ride on a roller coaster. 
        <br>
        Our sounds speaks for itself.
        <br><br>
        <a href="docs/press_july_2021.pdf" target="_blank" >
            <Icon data={faNewspaper} scale={3} pulse></Icon>
            Press
        </a>
    </div>
</div>

<style>
    @font-face {
        font-family: 'Mistral';
        font-style: normal;
        font-weight: normal;
        src: local('Mistral'), url('/fonts/MISTRAL.woff') format('woff');
    }

    .content{
        text-align: center;
        font-size: 2rem;
        line-height: 50px;
        padding: 20px 30px;

    }
    img{
        width: 80%;
    }

    .flint{
        display: inline;
        font-family: 'Mistral';
        padding: 0;
        margin: 0;
        font-size: 3rem;
    }
</style>