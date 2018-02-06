<template>
    <div class="m-portlet">
							<div class="m-portlet__head">
								<div class="m-portlet__head-caption">
									<div class="m-portlet__head-title">
										<h3 class="m-portlet__head-text">
											Danh Mục
										</h3>
									</div>
								</div>
                                <div class="m-portlet__head-tools">
                                    <ul class="m-portlet__nav">
                                        <li class="m-portlet__nav-item">
                                            <a href="#" class="btn btn-accent m-btn m-btn--custom m-btn--icon m-btn--pill m-btn--air">
                                                <span>
                                                    <i class="la la-plus"></i>
                                                    <span>
                                                        Add Category
                                                    </span>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
								</div>
							</div>
							<div class="m-portlet__body">
                                <div class="row">
                                <div class="col-md-8">
	                                <categoryList></categoryList>
                                </div>
                                <div class="col-md-4">
                                        <categoryForm></categoryForm>

                                </div>
                                </div>
								<!--begin::Section-->

								<!--end::Section-->
							</div>
							<!--end::Form-->
						</div>
</template>
<script>
import categoryList from '@/components/category/CategoryList'
import categoryForm from '@/components/category/CategoryForm'

    export default {
        name:'Category',
        created:function(){
            this.$store.dispatch('category/getAllCategory')
        },
        computed:{

        },
        methods:{

        },
        components:{
            categoryList,
            categoryForm
        }
    }
</script>
<style>
    .inherit {
        display: inherit;
    }
</style>
