<template>
    <div class="fu">
        <input type="file" ref="upload" multiple accept="image/jpg,image/jpeg,image/png,image/PNG" @change="uploadChage(this)"  style="opacity: 0;">
        <button @click="uploadImgBtn">上传图片</button>
        <div class="upload-wrap">
            <div v-for="(item,index) in imageUrl" :key="index" class="upload-item">
                <img :src="item.imgURL" alt="" >
                <span @click="deleteImg(index)">x</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        
    },
    data(){
        return{
            imageUrl:[],
        }
    },
    methods:{
        deleteImg(n){
            this.imageUrl=this.imageUrl.filter((item,index)=> index !=n)
            this.$emit('uploadImageData',this.imageUrl)
            console.log(this.imageUrl)
        },
        uploadImgBtn(){
            this.$refs.upload.click()
        },//上传图片
        uploadChage(imgFile){//选择图片
            let imgArr=[]
            //上传的多张图片
            let allFiles = this.$refs.upload.files;
            let _this=this
           
            for(let i=0;i<allFiles.length;i++){
                let file = allFiles[i]
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function(e){
                    _this.imageUrl.push({'name':file.name,'imgURL':e.target.result})
                    // console.log(JSON.parse(JSON.stringify(imgArr)))
                }
                setTimeout(()=>{
                    //    console.log(_this.imageUrl)
                        _this.$emit('uploadImageData',_this.imageUrl)
                },300)
            }
           
        },
    }
}
</script>

<style lang='less' scoped>
    .fu{
        border: 1px solid gainsboro;
        width: 75%;
        font-size: 0;
        min-height: 3.2rem;
        border-radius: 8/100rem;
        margin-left: 15%;
        // margin-top: -30/100rem;
        box-sizing: border-box;
        // padding-bottom: 10px;
        margin-bottom: 20px;
        .upload-wrap{
            display: flex;
            padding-top:10px;
            padding-left:16px;
            width: 100%;
            box-sizing: border-box;
            overflow-x: auto;
            .upload-item{
                position: relative;
                margin-right:10px;
                border: 1px solid #ddd;
                text-align: center;
                padding: 3px;
                width: 78px;
                height: 70px;
                img{
                    width:60px;
                    margin-right:10px;
                    
                }
                span{
                    position: absolute;
                    top:0;
                    right:0;
                    display: inline-block;
                    line-height: 10px;
                    height:10px;
                    width: 10px;
                    font-size: 20px;
                    color: #ccc;
                    // border:1px solid #ddd;
                    // border-radius: 50%;
                }
            }
        }
        
        .upload-demo {
            position: absolute;
            top: 50/100rem;
            left: 130/100rem;
        }
        // button {

        //     width: 180/100rem;
        //     height: 80/100rem;
        //     line-height: 50/100rem;
        //     // background: rgb(64, 158, 255);
        // }
        button {
					// margin-top: 30/100rem;
					margin-left: 5%;
					width: 45%;
					height: 70/100rem;
					line-height: 70/100rem;
					background: rgb(64, 158, 255);
					color: white;
					font-size: 14px;
					outline: none;
					border:none;
				}
        
    }
</style>