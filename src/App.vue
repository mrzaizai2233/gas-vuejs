<template>
   <div class="m-grid m-grid--hor m-grid--root m-page" id="app">
        <!-- BEGIN: Header -->
        <header class="m-grid__item    m-header " data-minimize-offset="200" data-minimize-mobile-offset="200">
            <div class="m-container m-container--fluid m-container--full-height">
                <div class="m-stack m-stack--ver m-stack--desktop">
                    <!-- BEGIN: Brand -->
                    <div class="m-stack__item m-brand  m-brand--skin-dark ">
                        <div class="m-stack m-stack--ver m-stack--general">
                            <div class="m-stack__item m-stack__item--middle m-brand__logo">
                                <a href="index.html" class="m-brand__logo-wrapper">
                                    <img alt="" src="assets/demo/default/media/img/logo/logo_default_dark.png" />
                                </a>
                            </div>
                            <div class="m-stack__item m-stack__item--middle m-brand__tools">
                                <!-- BEGIN: Left Aside Minimize Toggle -->
                                <a href="javascript:;" id="m_aside_left_minimize_toggle" class="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block 
					 ">
                                    <span></span>
                                </a>
                                <!-- END -->
                                <!-- BEGIN: Responsive Aside Left Menu Toggler -->
                                <a href="javascript:;" id="m_aside_left_offcanvas_toggle" class="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block">
                                    <span></span>
                                </a>
                                <!-- END -->
                                <!-- BEGIN: Responsive Header Menu Toggler -->
                                <a id="m_aside_header_menu_mobile_toggle" href="javascript:;" class="m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block">
                                    <span></span>
                                </a>
                                <!-- END -->
                                <!-- BEGIN: Topbar Toggler -->
                                <a id="m_aside_header_topbar_mobile_toggle" href="javascript:;" class="m-brand__icon m--visible-tablet-and-mobile-inline-block">
                                    <i class="flaticon-more"></i>
                                </a>
                                <!-- BEGIN: Topbar Toggler -->
                            </div>
                        </div>
                    </div>
                    <!-- END: Brand -->
                    <div class="m-stack__item m-stack__item--fluid m-header-head" id="m_header_nav">
                        <!-- BEGIN: Horizontal Menu -->
                        <button class="m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark " id="m_aside_header_menu_mobile_close_btn">
								<i class="la la-close"></i>
							</button>
                        <div id="m_header_menu" class="m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-light m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-dark m-aside-header-menu-mobile--submenu-skin-dark ">
                  
                        </div>
                        <!-- END: Horizontal Menu -->
                        <!-- BEGIN: Topbar -->
                        <div id="m_header_topbar" class="m-topbar  m-stack m-stack--ver m-stack--general">
                            <div class="m-stack__item m-topbar__nav-wrapper">
                                <ul class="m-topbar__nav m-nav m-nav--inline">
                                    <li class="m-nav__item m-dropdown m-dropdown--large m-dropdown--arrow m-dropdown--align-center m-dropdown--mobile-full-width m-dropdown--skin-light	m-list-search m-list-search--skin-light" data-dropdown-toggle="click" data-dropdown-persistent="true" id="m_quicksearch"
                                        data-search-type="dropdown">
                                        <a href="#" class="m-nav__link m-dropdown__toggle">
                                            <span class="m-nav__link-icon">
													<i class="flaticon-search-1"></i>
												</span>
                                        </a>
                                        <div class="m-dropdown__wrapper">
                                            <span class="m-dropdown__arrow m-dropdown__arrow--center"></span>
                                            <div class="m-dropdown__inner ">
                                                <div class="m-dropdown__header">
                                                    <form class="m-list-search__form">
                                                        <div class="m-list-search__form-wrapper">
                                                            <span class="m-list-search__form-input-wrapper">
																	<input id="m_quicksearch_input" autocomplete="off" type="text" name="q" class="m-list-search__form-input" value="" placeholder="Search...">
																</span>
                                                            <span class="m-list-search__form-icon-close" id="m_quicksearch_close">
																	<i class="la la-remove"></i>
																</span>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="m-dropdown__body">
                                                    <div class="m-dropdown__scrollable m-scrollable" data-scrollable="true" data-max-height="300" data-mobile-max-height="200">
                                                        <div class="m-dropdown__content"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="m-nav__item m-topbar__notifications m-topbar__notifications--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-center 	m-dropdown--mobile-full-width" data-dropdown-toggle="click" data-dropdown-persistent="true">
                                        <a href="#" class="m-nav__link m-dropdown__toggle" id="m_topbar_notification_icon">
                                            <span class="m-nav__link-badge m-badge m-badge--dot m-badge--dot-small m-badge--danger"></span>
                                            <span class="m-nav__link-icon">
													<i class="flaticon-music-2"></i>
												</span>
                                        </a>
                                        <div class="m-dropdown__wrapper">
                                           
                                        </div>
                                    </li>
                                    <li class="m-nav__item m-topbar__quick-actions m-topbar__quick-actions--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push m-dropdown--mobile-full-width m-dropdown--skin-light"
                                        data-dropdown-toggle="click">
                                        <a href="#" class="m-nav__link m-dropdown__toggle">
                                            <span class="m-nav__link-badge m-badge m-badge--dot m-badge--info m--hide"></span>
                                            <span class="m-nav__link-icon">
													<i class="flaticon-share"></i>
												</span>
                                        </a>
                                        <div class="m-dropdown__wrapper">
                                            
                                        </div>
                                    </li>
                                    <li class="m-nav__item m-topbar__user-profile m-topbar__user-profile--img  m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light" data-dropdown-toggle="click">
                                        <a href="#" class="m-nav__link m-dropdown__toggle">
                                            <span class="m-topbar__userpic">
													<img src="assets/app/media/img/users/user4.jpg" class="m--img-rounded m--marginless m--img-centered" alt=""/>
												</span>
                                            <span class="m-topbar__username m--hide">
													Nick
												</span>
                                        </a>
                                        <div class="m-dropdown__wrapper">
                                            
                                        </div>
                                    </li>
                                    <li id="m_quick_sidebar_toggle" class="m-nav__item">
                                        <a href="#" class="m-nav__link m-dropdown__toggle">
                                            <span class="m-nav__link-icon">
													<i class="flaticon-grid-menu"></i>
												</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- END: Topbar -->
                    </div>
                </div>
            </div>
        </header>
        <!-- END: Header -->
        <!-- begin::Body -->
        <div class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
            <!-- BEGIN: Left Aside -->
            <button class="m-aside-left-close  m-aside-left-close--skin-dark " id="m_aside_left_close_btn">
					<i class="la la-close"></i>
				</button>
            <div id="m_aside_left" class="m-grid__item	m-aside-left  m-aside-left--skin-dark ">
                <!-- BEGIN: Aside Menu -->
                <div id="m_ver_menu" class="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark " data-menu-vertical="true" data-menu-scrollable="false" data-menu-dropdown-timeout="500">
                    <ul class="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
                        <li class="m-menu__item " aria-haspopup="true">
                            <router-link to="/" class="m-menu__link ">
                                <i class="m-menu__link-icon flaticon-line-graph"></i>
                                <span class="m-menu__link-title">
										<span class="m-menu__link-wrap">
											<span class="m-menu__link-text">
												Dashboard
											</span>
                              
                                </span>
                                </span>
                            </router-link>
                        </li>
                        <li class="m-menu__section">
                            <h4 class="m-menu__section-text">
                                Components
                            </h4>
                            <i class="m-menu__section-icon flaticon-more-v3"></i>
                        </li>
                        <li class="m-menu__item " aria-haspopup="true">
                            <router-link to="/product" class="m-menu__link ">
                                <i class="m-menu__link-icon flaticon-open-box"></i>
                                <span class="m-menu__link-title">
										<span class="m-menu__link-wrap">
											<span class="m-menu__link-text">
												Product
											</span>
                              
                                </span>
                                </span>
                            </router-link>
                        </li>
                        <li class="m-menu__item " aria-haspopup="true">
                            <router-link to="/category" class="m-menu__link ">
                                <i class="m-menu__link-icon flaticon-squares-4"></i>
                                <span class="m-menu__link-title">
										<span class="m-menu__link-wrap">
											<span class="m-menu__link-text">
												Category
											</span>
                              
                                </span>
                                </span>
                            </router-link>
                        </li>
                        <li class="m-menu__item " aria-haspopup="true">
                            <router-link to="/user" class="m-menu__link ">
                                <i class="m-menu__link-icon flaticon-users"></i>
                                <span class="m-menu__link-title">
										<span class="m-menu__link-wrap">
											<span class="m-menu__link-text">
												User
											</span>
                              
                                </span>
                                </span>
                            </router-link>
                        </li>
                        <li class="m-menu__item  m-menu__item--submenu" aria-haspopup="true" data-menu-submenu-toggle="hover">
                            <a href="#" class="m-menu__link m-menu__toggle">
                                <i class="m-menu__link-icon flaticon-layers"></i>
                                <span class="m-menu__link-text">
										Base
									</span>
                                <i class="m-menu__ver-arrow la la-angle-right"></i>
                            </a>
                            <div class="m-menu__submenu">
                                <span class="m-menu__arrow"></span>
                                <ul class="m-menu__subnav">
                                    <li class="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                                        <a href="#" class="m-menu__link ">
                                            <span class="m-menu__link-text">
													Base
												</span>
                                        </a>
                                    </li>
                                    <li class="m-menu__item " aria-haspopup="true">
                                        <a href="components/base/state.html" class="m-menu__link ">
                                            <i class="m-menu__link-bullet m-menu__link-bullet--dot">
													<span></span>
												</i>
                                            <span class="m-menu__link-text">
													State Colors
												</span>
                                        </a>
                                    </li>
                                    <li class="m-menu__item " aria-haspopup="true">
                                        <a href="components/base/typography.html" class="m-menu__link ">
                                            <i class="m-menu__link-bullet m-menu__link-bullet--dot">
													<span></span>
												</i>
                                            <span class="m-menu__link-text">
													Typography
												</span>
                                        </a>
                                    </li>
                                    <li class="m-menu__item " aria-haspopup="true">
                                        <a href="components/base/stack.html" class="m-menu__link ">
                                            <i class="m-menu__link-bullet m-menu__link-bullet--dot">
													<span></span>
												</i>
                                            <span class="m-menu__link-text">
													Stack
												</span>
                                        </a>
                                    </li>
                                    <li class="m-menu__item " aria-haspopup="true">
                                        <a href="components/base/tables.html" class="m-menu__link ">
                                            <i class="m-menu__link-bullet m-menu__link-bullet--dot">
													<span></span>
												</i>
                                            <span class="m-menu__link-text">
													Tables
												</span>
                                        </a>
                                    </li>
                                    <li class="m-menu__item " aria-haspopup="true">
                                        <a href="components/base/progress.html" class="m-menu__link ">
                                            <i class="m-menu__link-bullet m-menu__link-bullet--dot">
													<span></span>
												</i>
                                            <span class="m-menu__link-text">
													Progress
												</span>
                                        </a>
                                    </li>
                                    <li class="m-menu__item " aria-haspopup="true">
                                        <a href="components/base/modal.html" class="m-menu__link ">
                                            <i class="m-menu__link-bullet m-menu__link-bullet--dot">
													<span></span>
												</i>
                                            <span class="m-menu__link-text">
													Modal
												</span>
                                        </a>
                                    </li>
                                    <li class="m-menu__item " aria-haspopup="true">
                                        <a href="components/base/alerts.html" class="m-menu__link ">
                                            <i class="m-menu__link-bullet m-menu__link-bullet--dot">
													<span></span>
												</i>
                                            <span class="m-menu__link-text">
													Alerts
												</span>
                                        </a>
                                    </li>
                                    <li class="m-menu__item " aria-haspopup="true">
                                        <a href="components/base/popover.html" class="m-menu__link ">
                                            <i class="m-menu__link-bullet m-menu__link-bullet--dot">
													<span></span>
												</i>
                                            <span class="m-menu__link-text">
													Popover
												</span>
                                        </a>
                                    </li>
                                    <li class="m-menu__item " aria-haspopup="true">
                                        <a href="components/base/tooltip.html" class="m-menu__link ">
                                            <i class="m-menu__link-bullet m-menu__link-bullet--dot">
													<span></span>
												</i>
                                            <span class="m-menu__link-text">
													Tooltip
												</span>
                                        </a>
                                    </li>
                                    <li class="m-menu__item " aria-haspopup="true">
                                        <a href="components/base/blockui.html" class="m-menu__link ">
                                            <i class="m-menu__link-bullet m-menu__link-bullet--dot">
													<span></span>
												</i>
                                            <span class="m-menu__link-text">
													Block UI
												</span>
                                        </a>
                                    </li>
                                    <li class="m-menu__item " aria-haspopup="true">
                                        <a href="components/base/spinners.html" class="m-menu__link ">
                                            <i class="m-menu__link-bullet m-menu__link-bullet--dot">
													<span></span>
												</i>
                                            <span class="m-menu__link-text">
													Spinners
												</span>
                                        </a>
                                    </li>
                                    <li class="m-menu__item " aria-haspopup="true">
                                        <a href="components/base/scrollable.html" class="m-menu__link ">
                                            <i class="m-menu__link-bullet m-menu__link-bullet--dot">
													<span></span>
												</i>
                                            <span class="m-menu__link-text">
													Scrollable
												</span>
                                        </a>
                                    </li>
                                    <li class="m-menu__item " aria-haspopup="true">
                                        <a href="components/base/dropdown.html" class="m-menu__link ">
                                            <i class="m-menu__link-bullet m-menu__link-bullet--dot">
													<span></span>
												</i>
                                            <span class="m-menu__link-text">
													Dropdown
												</span>
                                        </a>
                                    </li>
                                    <li class="m-menu__item  m-menu__item--submenu" aria-haspopup="true" data-menu-submenu-toggle="hover">
                                        <a href="#" class="m-menu__link m-menu__toggle">
                                            <i class="m-menu__link-bullet m-menu__link-bullet--dot">
													<span></span>
												</i>
                                            <span class="m-menu__link-text">
													Tabs
												</span>
                                            <i class="m-menu__ver-arrow la la-angle-right"></i>
                                        </a>
                                        <div class="m-menu__submenu">
                                            <span class="m-menu__arrow"></span>
                                            <ul class="m-menu__subnav">
                                                <li class="m-menu__item " aria-haspopup="true">
                                                    <a href="components/base/tabs/bootstrap.html" class="m-menu__link ">
                                                        <i class="m-menu__link-bullet m-menu__link-bullet--dot">
																<span></span>
															</i>
                                                        <span class="m-menu__link-text">
																Bootstrap Tabs
															</span>
                                                    </a>
                                                </li>
                                                <li class="m-menu__item " aria-haspopup="true">
                                                    <a href="components/base/tabs/line.html" class="m-menu__link ">
                                                        <i class="m-menu__link-bullet m-menu__link-bullet--dot">
																<span></span>
															</i>
                                                        <span class="m-menu__link-text">
																Line Tabs
															</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="m-menu__item " aria-haspopup="true">
                                        <a href="components/base/navs.html" class="m-menu__link ">
                                            <i class="m-menu__link-bullet m-menu__link-bullet--dot">
													<span></span>
												</i>
                                            <span class="m-menu__link-text">
													Navs
												</span>
                                        </a>
                                    </li>
                                    <li class="m-menu__item " aria-haspopup="true">
                                        <a href="components/base/lists.html" class="m-menu__link ">
                                            <i class="m-menu__link-bullet m-menu__link-bullet--dot">
													<span></span>
												</i>
                                            <span class="m-menu__link-text">
													Lists
												</span>
                                        </a>
                                    </li>
                                    <li class="m-menu__item " aria-haspopup="true">
                                        <a href="components/base/treeview.html" class="m-menu__link ">
                                            <i class="m-menu__link-bullet m-menu__link-bullet--dot">
													<span></span>
												</i>
                                            <span class="m-menu__link-text">
													Tree View
												</span>
                                        </a>
                                    </li>
                                    <li class="m-menu__item " aria-haspopup="true">
                                        <a href="components/base/bootstrap-notify.html" class="m-menu__link ">
                                            <i class="m-menu__link-bullet m-menu__link-bullet--dot">
													<span></span>
												</i>
                                            <span class="m-menu__link-text">
													Bootstrap Notify
												</span>
                                        </a>
                                    </li>
                                    <li class="m-menu__item " aria-haspopup="true">
                                        <a href="components/base/toastr.html" class="m-menu__link ">
                                            <i class="m-menu__link-bullet m-menu__link-bullet--dot">
													<span></span>
												</i>
                                            <span class="m-menu__link-text">
													Toastr
												</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- END: Aside Menu -->
            </div>
            <!-- END: Left Aside -->
            <div class="m-grid__item m-grid__item--fluid m-wrapper">
                <!-- BEGIN: Subheader -->
                <div class="m-subheader ">
                    <div class="d-flex align-items-center">
                        <div class="mr-auto">
                            <h3 class="m-subheader__title ">
                                {{pageTitle}}
                            </h3>
                        </div>
               
                    </div>
                </div>
                <!-- END: Subheader -->
                <div class="m-content">
                        <router-view></router-view>
                    <!--end::Portlet-->
                </div>
            </div>
        </div>
        <!-- end:: Body -->
        <!-- begin::Footer -->
        <footer class="m-grid__item		m-footer ">
            <div class="m-container m-container--fluid m-container--full-height m-page__container">
                <div class="m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop">
                    <div class="m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last">
                        <span class="m-footer__copyright">
					2017 &copy; Metronic theme by
					<a href="#" class="m-link">
						Keenthemes
					</a>
				</span>
                    </div>
                    <div class="m-stack__item m-stack__item--right m-stack__item--middle m-stack__item--first">
                        
                    </div>
                </div>
            </div>
        </footer>
        <!-- end::Footer -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'App',
    computed:{
        ...mapGetters([
            'pageTitle'
        ])
    }
}
</script>

<style>
</style>
