(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{199:function(e,r,t){"use strict";t.r(r);var s=t(0),a=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"centos镜像使用帮助"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos镜像使用帮助","aria-hidden":"true"}},[e._v("#")]),e._v(" Centos镜像使用帮助")]),e._v(" "),t("h2",{attrs:{id:"收录架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#收录架构","aria-hidden":"true"}},[e._v("#")]),e._v(" 收录架构")]),e._v(" "),t("ul",[t("li",[e._v("i386")]),e._v(" "),t("li",[e._v("x86_64")])]),e._v(" "),t("h2",{attrs:{id:"收录版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#收录版本","aria-hidden":"true"}},[e._v("#")]),e._v(" 收录版本")]),e._v(" "),t("ul",[t("li",[e._v("5")]),e._v(" "),t("li",[e._v("6")]),e._v(" "),t("li",[e._v("7")])]),e._v(" "),t("h2",{attrs:{id:"使用说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用说明","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用说明")]),e._v(" "),t("p",[e._v("复制以下内容到对应版本的CentOS-Base.repo, 放入/etc/yum.repos.d/,")]),e._v(" "),t("p",[e._v("运行yum makecache生成缓存。")]),e._v(" "),t("h5",{attrs:{id:"centos-5-centos-base-repo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos-5-centos-base-repo","aria-hidden":"true"}},[e._v("#")]),e._v(" CentOS 5 - CentOS-Base.repo")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# CentOS-Base.repo\n#\n# The mirror system uses the connecting IP address of the client and the\n# update status of each mirror to pick mirrors that are updated to and\n# geographically close to the client.  You should use this for CentOS updates\n# unless you are manually picking other mirrors.\n#\n# If the mirrorlist= does not work for you, as a fall back you can try the\n# remarked out baseurl= line instead.\n#\n#\n\n[base]\nname=CentOS-$releasever - Base - mirrors.xjtu.edu.cn\nbaseurl=http://mirrors.xjtu.edu.cn/centos/$releasever/os/$basearch/\n#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=os\ngpgcheck=1\ngpgkey=http://mirrors.xjtu.edu.cn/centos/RPM-GPG-KEY-CentOS-5\n\n#released updates\n[updates]\nname=CentOS-$releasever - Updates - mirrors.xjtu.edu.cn\nbaseurl=http://mirrors.xjtu.edu.cn/centos/$releasever/updates/$basearch/\n#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=updates\ngpgcheck=1\ngpgkey=http://mirrors.xjtu.edu.cn/centos/RPM-GPG-KEY-CentOS-5\n\n#additional packages that may be useful\n[extras]\nname=CentOS-$releasever - Extras - mirrors.xjtu.edu.cn\nbaseurl=http://mirrors.xjtu.edu.cn/centos/$releasever/extras/$basearch/\n#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=extras\ngpgcheck=1\ngpgkey=http://mirrors.xjtu.edu.cn/centos/RPM-GPG-KEY-CentOS-5\n\n#packages used/produced in the build but not released\n[addons]\nname=CentOS-$releasever - Addons - mirrors.xjtu.edu.cn\nbaseurl=http://mirrors.xjtu.edu.cn/centos/$releasever/addons/$basearch/\n#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=addons\ngpgcheck=1\ngpgkey=http://mirror.centos.org/centos/RPM-GPG-KEY-CentOS-5\n\n#additional packages that extend functionality of existing packages\n[centosplus]\nname=CentOS-$releasever - Plus - mirrors.xjtu.edu.cn\nbaseurl=http://mirrors.xjtu.edu.cn/centos/$releasever/centosplus/$basearch/\n#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=centosplus\ngpgcheck=1\nenabled=0\ngpgkey=http://mirrors.xjtu.edu.cn/centos/RPM-GPG-KEY-CentOS-5\n\n#contrib - packages by Centos Users\n[contrib]\nname=CentOS-$releasever - Contrib - mirrors.xjtu.edu.cn\nbaseurl=http://mirrors.xjtu.edu.cn/centos/$releasever/contrib/$basearch/\n#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=contrib\ngpgcheck=1\nenabled=0\ngpgkey=http://mirrors.xjtu.edu.cn/centos/RPM-GPG-KEY-CentOS-5\n")])])]),t("h5",{attrs:{id:"centos-6-centos-base-repo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos-6-centos-base-repo","aria-hidden":"true"}},[e._v("#")]),e._v(" CentOS 6 - CentOS-Base.repo")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# CentOS-Base.repo\n#\n# The mirror system uses the connecting IP address of the client and the\n# update status of each mirror to pick mirrors that are updated to and\n# geographically close to the client.  You should use this for CentOS updates\n# unless you are manually picking other mirrors.\n#\n# If the mirrorlist= does not work for you, as a fall back you can try the\n# remarked out baseurl= line instead.\n#\n#\n\n[base]\nname=CentOS-$releasever - Base - mirrors.xjtu.edu.cn\nbaseurl=http://mirrors.xjtu.edu.cn/centos/$releasever/os/$basearch/\n#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=os\ngpgcheck=1\ngpgkey=http://mirrors.xjtu.edu.cn/centos/RPM-GPG-KEY-CentOS-6\n\n#released updates\n[updates]\nname=CentOS-$releasever - Updates - mirrors.xjtu.edu.cn\nbaseurl=http://mirrors.xjtu.edu.cn/centos/$releasever/updates/$basearch/\n#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=updates\ngpgcheck=1\ngpgkey=http://mirrors.xjtu.edu.cn/centos/RPM-GPG-KEY-CentOS-6\n\n#additional packages that may be useful\n[extras]\nname=CentOS-$releasever - Extras - mirrors.xjtu.edu.cn\nbaseurl=http://mirrors.xjtu.edu.cn/centos/$releasever/extras/$basearch/\n#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=extras\ngpgcheck=1\ngpgkey=http://mirrors.xjtu.edu.cn/centos/RPM-GPG-KEY-CentOS-6\n\n#additional packages that extend functionality of existing packages\n[centosplus]\nname=CentOS-$releasever - Plus - mirrors.xjtu.edu.cn\nbaseurl=http://mirrors.xjtu.edu.cn/centos/$releasever/centosplus/$basearch/\n#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=centosplus\ngpgcheck=1\nenabled=0\ngpgkey=http://mirrors.xjtu.edu.cn/centos/RPM-GPG-KEY-CentOS-6\n\n#contrib - packages by Centos Users\n[contrib]\nname=CentOS-$releasever - Contrib - mirrors.xjtu.edu.cn\nbaseurl=http://mirrors.xjtu.edu.cn/centos/$releasever/contrib/$basearch/\n#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=contrib\ngpgcheck=1\nenabled=0\ngpgkey=http://mirrors.xjtu.edu.cn/centos/RPM-GPG-KEY-CentOS-6\n")])])]),t("h5",{attrs:{id:"centos-7-centos-base-repo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos-7-centos-base-repo","aria-hidden":"true"}},[e._v("#")]),e._v(" CentOS 7 - CentOS-Base.repo")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# CentOS-Base.repo\n#\n# The mirror system uses the connecting IP address of the client and the\n# update status of each mirror to pick mirrors that are updated to and\n# geographically close to the client.  You should use this for CentOS updates\n# unless you are manually picking other mirrors.\n#\n# If the mirrorlist= does not work for you, as a fall back you can try the\n# remarked out baseurl= line instead.\n#\n#\n\n[base]\nname=CentOS-$releasever - Base\n#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=os\nbaseurl=http://mirrors.xjtu.edu.cn/centos/$releasever/os/$basearch/\ngpgcheck=1\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7\n\n#released updates\n[updates]\nname=CentOS-$releasever - Updates\n# mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=updates\nbaseurl=http://mirrors.xjtu.edu.cn/centos/$releasever/updates/$basearch/\ngpgcheck=1\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7\n\n#additional packages that may be useful\n[extras]\nname=CentOS-$releasever - Extras\n# mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=extras\nbaseurl=http://mirrors.xjtu.edu.cn/centos/$releasever/extras/$basearch/\ngpgcheck=1\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7\n\n#additional packages that extend functionality of existing packages\n[centosplus]\nname=CentOS-$releasever - Plus\n# mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=centosplus\nbaseurl=http://mirrors.xjtu.edu.cn/centos/$releasever/centosplus/$basearch/\ngpgcheck=1\nenabled=0\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7\n")])])])])}],!1,null,null,null);a.options.__file="centos.md";r.default=a.exports}}]);