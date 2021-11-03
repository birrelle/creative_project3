<template>
  <div class="about_container" >
        <div class="about_section">
          <img class="this_image" src="../..//images/about.jpg">
        </div>
        <div class="about_section">
          <div class="about_text">
            Hi! my name is Emily Little, and I am currently a student at BYU in Utah. 
            While I am not studying anything art related, I love to keep up on this hobby in my free time.
            <br/><br/>
            I have loved art ever since I was a child. 
            I really enjoyed pencil and colored pencil drawing in high school, 
            and have just recently joined the world of digital art. In the last year or 
            so I have been inspired by so many wonderful artists around me, and I have decided 
            to expand my art abilities and share this progress with others.
            <br/><br/>
            When I am not drawing or doing homework, you can find me somewhere outdoors or developing one of my many hobbies!
          </div>
        </div>
      </div>
</template>


<style scoped>
@media only screen and (max-width: 500px) {
    .about_text {
        font-size: 14px !important;
        word-spacing: 1px !important;
        line-height: 23px !important;
        padding-top: 15px!important;
        padding-bottom: 15px !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
    }
    h1 {
        font-size: 30px !important;
    }

    .about_container {
        flex-direction: column !important;
        width:85% !important;
    }
    .this_image {
        width: 100% !important;
        margin-top: 15px !important;
        border-radius: 10px 10px 10px 10px !important;
    }
}

.about_text {
    padding-top:10%;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 10%;
    font-size: 15px;
    font-family:Georgia, 'Times New Roman', Times, serif;
    word-spacing: 3px;
    letter-spacing: 0.2px;
    line-height: 35px;
}
h1 {
    font-size: 50px;
    font-family: 'Optima',sans-serif !important;
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: center;

}

.about_section {
    display: flex;
    /* flex-direction: row; */
    flex-wrap: wrap;
    width: 80% !important;
    margin: 0 auto;
}

.about_container {
    display: flex;
    flex-direction: row;
    flex: 1 1 40%;
    margin: 15px;
    width: 70%;
    margin:auto;
    background-color: #ebe0d4;
    border-radius: 10px ;
}

img {
    max-width: 100%;
    object-fit: cover;
    border-radius: 10px 0px 0px 10px;
}
.this_image {
    width: 90%;
}

</style>