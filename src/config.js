export const htmlBoilerplate = `
<section>
  <h1>Title</h1>
  <div>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint officiis  dolore quia ipsum natus excepturi placeat tempora perferendis est! adipisicing elit. Sint 	officiis qui dolore quia ipsum laceat tempora perferendis. qui dolore 	quia ipsum natus excepturi placeat tempora perferendis est! adipisicing 
    </p>
    <p>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint officiis qui dolore tempora perferendis est! adipisicing elit. Sint 	officiis qui dolore quia ipsum laceat tempora perferendis. qui dolore 	quia ipsum natus excepturi placeat tempora perferendis est! adipisicing 
    </p>
</div>
</section>
`
export const cssBoilerPlate = `
* {
    margin: 0;
    padding: 0;
  }
  section {
    margin: 2em 2em;
    padding: 2em 2em;
    border: 2px solid #999;
    border-radius: 8px;
  }
  
  h1{
  color: #333;
  font-size: 3rem;
  text-align:center;
  }
  p {
    margin: 1em 0;
    letter-spacing: 0.5px;
  }
`

export const jsBoilerplate = `
document.body.style.padding = '0.2em';
const div = document.querySelector('div');
div.style.backgroundColor = '#ddd';
div.style.padding = '2em';

`