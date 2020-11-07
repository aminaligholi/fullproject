<template>
<div>

    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form  @submit="logininfo">
                        <div class="form-group">
                            <label for="userName">user Name</label>
                            <input type="text" class="form-control" id="userName" placeholder="user Name">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
methods:{
    logininfo(e){
        e.preventDefault();
        let info={}
        info.username=e.target[0].value;
        info.password=e.target[1].value;
        this.$auth.loginWith('local',
        {data:info})
     
      
    }
}
}
</script>

<style>

</style>
