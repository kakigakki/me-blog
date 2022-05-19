(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{484:function(v,_,i){"use strict";i.r(_);var t=i(8),e=Object(t.a)({},(function(){var v=this,_=v.$createElement,i=v._self._c||_;return i("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[i("h3",{attrs:{id:"分布式的版本控制系统"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#分布式的版本控制系统"}},[v._v("#")]),v._v(" 分布式的版本控制系统")]),v._v(" "),i("ol",[i("li",[v._v("每个客户端本地都储存了项目的所有历史版本（git 人员对其进行极致的压缩）")]),v._v(" "),i("li",[v._v("git 中有区域和对象的概念\n"),i("ul",[i("li",[v._v("区域：\n"),i("ul",[i("li",[v._v("工作区")]),v._v(" "),i("li",[v._v("暂存区")]),v._v(" "),i("li",[v._v("版本库")])])]),v._v(" "),i("li",[v._v("对象\n"),i("ul",[i("li",[v._v("git 对象：所有的文件的每个版本的内容都是以哈希值名的压缩文件保存在.git 文件夹下的 objects 文件夹里。git 对象代表文件的一次次版本\n"),i("ul",[i("li",[i("code",[v._v("git hash-obejct -w fileUrl")]),v._v(" ：生成一个键值对存到 .git/objects")])])]),v._v(" "),i("li",[v._v("树对象：代表项目的一次次版本\n"),i("ul",[i("li",[i("code",[v._v("git update-index - -add - -cacheinfo 100644 hash text.txt")]),v._v(" ：往暂存区添加一条记录，（让 git 对象对应文件名）")])])]),v._v(" "),i("li",[v._v("提交对象： 我们需要知道的对象，能看到有谁提交了版本，每一个代表项目的一次版本\n"),i("ul",[i("li",[i("code",[v._v("Echo “first commit” | git commit-tree treehash")]),v._v(" :生成一个提交对象存到.git/objects")])])])])]),v._v(" "),i("li",[v._v("对以上对象的查询\n"),i("ul",[i("li",[i("code",[v._v("git cat-file -p hash")]),v._v(" : 拿到对应对象的内容")]),v._v(" "),i("li",[i("code",[v._v("git cat-file -t hash")]),v._v(" ：拿到对应对象的类型")])])])])])]),v._v(" "),i("h3",{attrs:{id:"git-初始化配置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-初始化配置"}},[v._v("#")]),v._v(" git 初始化配置")]),v._v(" "),i("ol",[i("li",[v._v("初始化配置 git，用来说明你是谁。")])]),v._v(" "),i("div",{staticClass:"language-git extra-class"},[i("pre",{pre:!0,attrs:{class:"language-git"}},[i("code",[v._v("git config --global user.name “xxxx”\ngit config --global user.email xxxxx\n")])])]),i("p",[v._v("除--global 还--system（对该电脑所有用户都适用），还有啥都不写（只对当前项目有用）")]),v._v(" "),i("ol",[i("li",[v._v("git config –list 查看当前的配置")]),v._v(" "),i("li",[v._v("删除初始化的全局配置")])]),v._v(" "),i("div",{staticClass:"language-git extra-class"},[i("pre",{pre:!0,attrs:{class:"language-git"}},[i("code",[v._v("git config --global --unset user.name\ngit config --global --unset user.email\n")])])]),i("ol",[i("li",[v._v("修改初始化的全局配置")])]),v._v(" "),i("div",{staticClass:"language-git extra-class"},[i("pre",{pre:!0,attrs:{class:"language-git"}},[i("code",[v._v("git config --global  user.name "),i("span",{pre:!0,attrs:{class:"token string"}},[v._v('"xxxx"')]),v._v("\ngit config --global  user.email "),i("span",{pre:!0,attrs:{class:"token string"}},[v._v('"xxxx"')]),v._v("\n")])])]),i("h3",{attrs:{id:"git-的底层命令"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-的底层命令"}},[v._v("#")]),v._v(" git 的底层命令")]),v._v(" "),i("ol",[i("li",[i("code",[v._v("git init")]),v._v(" 初始化仓库")]),v._v(" "),i("li",[v._v(".git 隐藏文件夹中的文件夹分别为\n"),i("img",{attrs:{src:"https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20200430005432.png",alt:"20200430005432"}})]),v._v(" "),i("li",[i("code",[v._v("clear")]),v._v(" 清屏")]),v._v(" "),i("li",[i("code",[v._v("echo ‘xxxx’")]),v._v(" 往控制台输出信息\n"),i("ul",[i("li",[i("code",[v._v("echo ‘xxx’ > test.txt")]),v._v(" 创建 test 文件，且输入 xxx")])])]),v._v(" "),i("li",[i("code",[v._v("ll")]),v._v(" 遍历当前文件夹")]),v._v(" "),i("li",[i("code",[v._v("find")]),v._v(" 目录名 ：打印对应目录下的子孙文件和目录")]),v._v(" "),i("li",[i("code",[v._v("find")]),v._v(" 目录名 -type f 打印对应目录下的子孙文件")]),v._v(" "),i("li",[i("code",[v._v("Rm")]),v._v(" 文件")]),v._v(" "),i("li",[i("code",[v._v("Mv")]),v._v(" 文件 剪切（重命名）")]),v._v(" "),i("li",[i("code",[v._v("Cat")]),v._v(" 文件，查看文件的内容")]),v._v(" "),i("li",[i("code",[v._v("Vim")]),v._v(" 文件\n"),i("ul",[i("li",[v._v("按 i 进入编辑模式")]),v._v(" "),i("li",[v._v("按 esc 退出 i 模式后， :wq 后保存退出")])])]),v._v(" "),i("li",[i("code",[v._v("git cat-file -p hash")]),v._v(" : 拿到对应对象的内容")]),v._v(" "),i("li",[i("code",[v._v("git cat-file -t hash")]),v._v(" ：拿到对应对象的类型")]),v._v(" "),i("li",[i("code",[v._v("git ls-files -s")]),v._v(" 查看暂存区的内容")])]),v._v(" "),i("h3",{attrs:{id:"git-的高层命令"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-的高层命令"}},[v._v("#")]),v._v(" git 的高层命令")]),v._v(" "),i("ol",[i("li",[i("code",[v._v("git add ./")]),v._v(" 将修改添加到暂存区（其实是提到版本库，再拉回暂存区）\n"),i("ul",[i("li",[i("code",[v._v("git hash-object -w 文件名")]),v._v("（修改了多少个工作目录中的文件，这个命令就被执行多少次）")]),v._v(" "),i("li",[i("code",[v._v("git update-index …")])])])]),v._v(" "),i("li",[i("code",[v._v("git commit -m “xxxx”")]),v._v(" 将暂存区提交到版本库\n"),i("ul",[i("li",[i("code",[v._v("git write-tree")])]),v._v(" "),i("li",[i("code",[v._v("git commit-tree")])])])]),v._v(" "),i("li",[i("code",[v._v("git init")]),v._v(" 初始化新仓库")]),v._v(" "),i("li",[i("code",[v._v("git status")]),v._v(" 检查当前文件的状态\n"),i("ul",[i("li",[v._v("git 中的文件有两种状态\n"),i("ul",[i("li",[v._v("已跟踪 （被 git add 过的文件）\n"),i("ul",[i("li",[v._v("已修改 "),i("code",[v._v("modified")])]),v._v(" "),i("li",[v._v("已暂存 "),i("code",[v._v("staged")])]),v._v(" "),i("li",[v._v("已提交 "),i("code",[v._v("commited")])])])]),v._v(" "),i("li",[v._v("未跟踪 （未被 git add 过的文件）")])])])])]),v._v(" "),i("li",[i("code",[v._v("git diff")]),v._v(" 查看哪些还没有暂存")]),v._v(" "),i("li",[i("code",[v._v("git diff –staged")]),v._v(" 查看哪些修改已经被暂存了，还没提交的")]),v._v(" "),i("li",[i("code",[v._v('git commit -m "xxx"')]),v._v(" 提交+注释")]),v._v(" "),i("li",[i("code",[v._v("git commit -a")]),v._v(" 跳过暂存区直接提交")]),v._v(" "),i("li",[i("code",[v._v('git commit -a -m "xxx"')]),v._v(" 跳过暂存区直接提交")]),v._v(" "),i("li",[i("code",[v._v("git mv xxxx xxxx")]),v._v(" ：此步骤相当于下面三步\n"),i("ul",[i("li",[i("code",[v._v("Mv")])]),v._v(" "),i("li",[i("code",[v._v("Rm")])]),v._v(" "),i("li",[i("code",[v._v("git add")])])])]),v._v(" "),i("li",[i("code",[v._v("git rm xxx")]),v._v(" ： 此步骤相当于下面两步\n"),i("ul",[i("li",[i("code",[v._v("Rm")])]),v._v(" "),i("li",[i("code",[v._v("git add")])])])]),v._v(" "),i("li",[i("code",[v._v("git log")]),v._v(" 查看提交记录\n"),i("ul",[i("li",[i("code",[v._v("git log -- oneline")]),v._v(" 可以简略显示。显示的 hash 值是提交对象")]),v._v(" "),i("li",[i("code",[v._v("git log --oneline --decorate --graph --all")]),v._v(" 查看所有的分支的历史记录")]),v._v(" "),i("li",[v._v("太长的命令可以用配别名\n"),i("ul",[i("li",[i("code",[v._v('git config --global alias.xxx "git log --oneline --decorate --graph --all"')])])])])])]),v._v(" "),i("li",[i("code",[v._v("git reflog")]),v._v(" 查看完整操作记录\n"),i("ul",[i("li",[v._v("查看所有分支的记录，我在本地上配置了 alllog")])])])]),v._v(" "),i("h3",{attrs:{id:"git-分支操作"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-分支操作"}},[v._v("#")]),v._v(" git 分支操作")]),v._v(" "),i("ol",[i("li",[v._v("分支的本质就是一个提交对象")]),v._v(" "),i("li",[v._v("HEAD : 是一个指针，它默认指向 master 分支，切换分支时就是让 HEAD 指向不同的分支，每次有新的提交时，HEAD 就会带着当前的分支往前移动（HEAD 移动，分支不会移动）。")]),v._v(" "),i("li",[i("code",[v._v("git/refs")]),v._v("目录中保存了所有的分支，及其对应的提交对象的 hash 值（每次提交对象被新提交时，hash 值都会改变）")]),v._v(" "),i("li",[v._v("切换分支会改变 workspace 中的文件。\n"),i("ul",[i("li",[v._v("每次切换分支前，当前分支一定得是干净的（已提交状态）")]),v._v(" "),i("li",[v._v("因为在切换分支时，当前分支有未暂存的新创建的 modified 的文件 或者有未提交的的新创建的 staged 的文件的时候，会把此文件一次带到切换的分支上，会污染切换的分支")])])]),v._v(" "),i("li",[v._v("操作命令\n"),i("ul",[i("li",[i("code",[v._v("git branch xxx")]),v._v(" ：在当前提交对象上创建一个新的分支")]),v._v(" "),i("li",[i("code",[v._v("git branch xxx Hash值")]),v._v(" ：在指定的提交对象上创建新的分支（时光机）")]),v._v(" "),i("li",[i("code",[v._v("git branch")]),v._v(" ：查看分支列表")]),v._v(" "),i("li",[i("code",[v._v("git checkout branch")]),v._v(" 切换分支")]),v._v(" "),i("li",[i("code",[v._v("git checkout -b xxx")]),v._v(" 创建新的分支，并切换至此分支")]),v._v(" "),i("li",[i("code",[v._v("git branch -d xxx")]),v._v(" :删除一个合并了的分支")]),v._v(" "),i("li",[i("code",[v._v("git branch -D xxx")]),v._v("：强制删除一个分支（不管合并了否）")]),v._v(" "),i("li",[i("code",[v._v("git branch -v")]),v._v(" 可以查看所有分支的最后一次提交")])])])]),v._v(" "),i("h3",{attrs:{id:"git-存储"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-存储"}},[v._v("#")]),v._v(" git 存储")]),v._v(" "),i("ol",[i("li",[v._v("当你大工作做一半，但是有其他小工作要做，又不想提交当前分支的话，可以用存储")]),v._v(" "),i("li",[v._v("常用命令\n"),i("ul",[i("li",[i("code",[v._v("git stash")]),v._v(" 将未完成的 modified 保存到一个栈上")]),v._v(" "),i("li",[i("code",[v._v("git stash list")]),v._v(" 查看栈上有哪些修改")]),v._v(" "),i("li",[i("code",[v._v("git stash apply")]),v._v(" 将保存到栈上的第一个 modified 重新取出")]),v._v(" "),i("li",[i("code",[v._v("git stash apply stash@{x}")]),v._v(" 指定取出哪个 modified")]),v._v(" "),i("li",[i("code",[v._v("git statsh drop")]),v._v(" 删除第一个")]),v._v(" "),i("li",[i("code",[v._v("git statsh pop")]),v._v(" 取出修改，删除栈上的第一个")])])])]),v._v(" "),i("h3",{attrs:{id:"git-撤销和重置（主要用下面三个命令"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-撤销和重置（主要用下面三个命令"}},[v._v("#")]),v._v(" git 撤销和重置（主要用下面三个命令")]),v._v(" "),i("ol",[i("li",[i("code",[v._v("git checkout -- filename :")]),v._v(" 撤回自己在工作区的修改")]),v._v(" "),i("li",[i("code",[v._v("git reset filename")]),v._v(" 撤回自己在暂存区的修改\n"),i("ul",[i("li",[v._v("相当于 reset 第二步曲的缩写")])])]),v._v(" "),i("li",[i("code",[v._v("git commit --amend")]),v._v(" 再次提交暂存区内已修改的文件(类似撤回自己在版本库的提交，再提交一次)")])]),v._v(" "),i("h3",{attrs:{id:"reset"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#reset"}},[v._v("#")]),v._v(" reset")]),v._v(" "),i("ol",[i("li",[v._v("三步曲\n"),i("ul",[i("li",[v._v("第一步："),i("code",[v._v("git reset --soft HEAD~")]),v._v(" "),i("ul",[i("li",[v._v("一步：\n"),i("ul",[i("li",[v._v("动 HEAD，带着当前 branch 一起往前一版本后退（撤销）")])])]),v._v(" "),i("li",[v._v("(类似"),i("code",[v._v("git commit --amend")]),v._v("，不过"),i("code",[v._v("--amend")]),v._v("撤回然后提交了）\n"),i("code",[v._v("git reset --soft 提交对象的hash值")]),v._v(" ：HEAD 带着 branch 去指定的提交对象上")])])]),v._v(" "),i("li",[v._v("第二步："),i("code",[v._v("git reset [--mixed] HEAD~")]),v._v(" "),i("ul",[i("li",[v._v("两步：\n"),i("ul",[i("li",[v._v("动 HEAD ,带着当前 branch 一起撤退")]),v._v(" "),i("li",[v._v("动了暂存区。")])])]),v._v(" "),i("li",[i("code",[v._v("git reset --mixed")]),v._v(" 提交对象的 hash 值 ：HEAD 带着 branch 去指定的提交对象上")]),v._v(" "),i("li",[v._v("可缩写成："),i("code",[v._v("git reset")])])])]),v._v(" "),i("li",[v._v("第三步："),i("code",[v._v("git reset --hard HEAD~")]),v._v("（reset 命令唯一的危险用法）\n"),i("ul",[i("li",[v._v("三步：\n"),i("ul",[i("li",[v._v("动 HEAD ,带着当前 branch 一起撤退")]),v._v(" "),i("li",[v._v("动了暂存区")]),v._v(" "),i("li",[v._v("动了工作区（会将工作区的内容覆盖）")])])]),v._v(" "),i("li",[v._v("一般撤销工作区用："),i("code",[v._v("git checkout --filename")])]),v._v(" "),i("li",[v._v("跳过第一步，第二步，")]),v._v(" "),i("li",[v._v("只做第三步：动了工作区")])])])])])]),v._v(" "),i("h3",{attrs:{id:"标签"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#标签"}},[v._v("#")]),v._v(" 标签")]),v._v(" "),i("ol",[i("li",[v._v("标签跟分支很像，只是分支能动，标签不能动")]),v._v(" "),i("li",[v._v("常用命令\n"),i("ul",[i("li",[i("code",[v._v("git tag")]),v._v(" 查看当前标签名")]),v._v(" "),i("li",[i("code",[v._v("git tag <标签名>")]),v._v(" [可选：提交对象的 hash 值] 新建标签")]),v._v(" "),i("li",[i("code",[v._v("git show <标签名>")]),v._v(" :查看标签")]),v._v(" "),i("li",[i("code",[v._v("git tag -d <标签名>")]),v._v(" ：删除标签")]),v._v(" "),i("li",[i("code",[v._v("git checkout <标签名>")]),v._v(" ：切换到 tag")]),v._v(" "),i("li",[v._v("如果当前标签没有分支时，会产生头部分离。需要在当前标签上创建分支")]),v._v(" "),i("li",[i("code",[v._v("git checkout -b <分支名>")])])])])]),v._v(" "),i("h3",{attrs:{id:"远程仓库"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库"}},[v._v("#")]),v._v(" 远程仓库")]),v._v(" "),i("ol",[i("li",[i("code",[v._v("git remote add <别名> url")]),v._v(" ： 让本地仓库跟远程仓库连起来")]),v._v(" "),i("li",[i("code",[v._v("git remote -v")]),v._v(" ：查看远程仓库")]),v._v(" "),i("li",[i("code",[v._v("git remote show 别名")]),v._v(" ：查看远程仓库的更多信息")]),v._v(" "),i("li",[i("code",[v._v("git remote rename 旧别名 新别名")]),v._v(" ：重命名远程仓库")]),v._v(" "),i("li",[i("code",[v._v("git remote rm 别名")]),v._v(" ：删除远程仓库")]),v._v(" "),i("li",[i("code",[v._v("git push 远程仓库别名 分支名")])]),v._v(" "),i("li",[i("code",[v._v("git clone 远程仓url")]),v._v(" ：将远程仓库拉到本地\n"),i("ul",[i("li",[i("code",[v._v("git clone")]),v._v("下来的远程仓库的别名，自动设置成 origin")])])]),v._v(" "),i("li",[v._v("自己创建的仓库，可以进行 push,但是如果是从别人的仓库 clone 下来的话，如果没有那个人的成员邀请的话，无法进行 push")])]),v._v(" "),i("h3",{attrs:{id:"团队协作流程"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#团队协作流程"}},[v._v("#")]),v._v(" 团队协作流程")]),v._v(" "),i("ol",[i("li",[v._v("项目经理初始化远程仓库\n"),i("ul",[i("li",[v._v("在 github 上初始化一个空的仓库")])])]),v._v(" "),i("li",[v._v("项目经理创建本地仓库\n"),i("ul",[i("li",[i("code",[v._v("git init")])]),v._v(" "),i("li",[v._v("将源码复制进来")]),v._v(" "),i("li",[v._v("修改用户名，修改邮箱")])])]),v._v(" "),i("li",[v._v("项目经理将本地仓库跟远程仓库链接起来\n"),i("ul",[i("li",[i("code",[v._v("git remote add 别名 url")])])])]),v._v(" "),i("li",[v._v("项目经理将本地仓库推送到远程仓库\n"),i("ul",[i("li",[v._v("清理 windows 凭据")]),v._v(" "),i("li",[i("code",[v._v("git push 别名 分支")]),v._v(" （输入 github 的用户名，密码，输完后会附带生成远程跟踪分支 xxx/xxx）")])])]),v._v(" "),i("li",[v._v("项目成员在自己本地克隆远程仓库\n"),i("ul",[i("li",[i("code",[v._v("git clone 仓库地址")]),v._v(" "),i("ul",[i("li",[v._v("默认为远程仓库配了别名 origin")]),v._v(" "),i("li",[v._v("附带生成远程跟踪分支 xxx/xxx")])])])])]),v._v(" "),i("li",[v._v("项目成员做出贡献\n"),i("ul",[i("li",[i("code",[v._v("git add")])]),v._v(" "),i("li",[i("code",[v._v("git commit")])]),v._v(" "),i("li",[i("code",[v._v("git push")]),v._v(" 别名 分支（输入 github 的用户名，密码）")])])]),v._v(" "),i("li",[v._v("项目经理更新修改\n"),i("ul",[i("li",[i("code",[v._v("git fetch 别名")]),v._v("（将修改同步到远程跟踪分支上）")]),v._v(" "),i("li",[i("code",[v._v("git merge远程跟踪分支")]),v._v("（将同步了的远程跟踪分支与本地分支合并）")])])])]),v._v(" "),i("h3",{attrs:{id:"深入理解远程库"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#深入理解远程库"}},[v._v("#")]),v._v(" 深入理解远程库")]),v._v(" "),i("h4",{attrs:{id:"远程跟踪分支"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#远程跟踪分支"}},[v._v("#")]),v._v(" 远程跟踪分支")]),v._v(" "),i("ol",[i("li",[v._v("远程跟踪分支是远程分支状态的引用，它们是不能自己移动的，在每次网络通信操作时，自动移动")]),v._v(" "),i("li",[v._v("如果本地分支没有跟踪任何远程跟踪分支的话，是无法进行网络通信操作的")]),v._v(" "),i("li",[v._v("一个本地分支怎么去跟踪一个远程跟踪分支\n"),i("ul",[i("li",[v._v("当克隆的时候，会自动生成一个 master 本地分支（已经跟踪了对应的远程跟踪分支）")]),v._v(" "),i("li",[v._v("在新建其他分支的时候，可以指定想要跟踪的远程跟踪分支\n"),i("ul",[i("li",[i("code",[v._v("git checkout -b")]),v._v("本地分支名 远程跟踪分支名")]),v._v(" "),i("li",[v._v("或者 "),i("code",[v._v("git checkout --track")]),v._v(" 远程跟踪分支名（创建一个跟远程分支同一个名字的本地分支和远程跟踪分支，并让本地分支跟踪远程跟踪分支）")])])])])]),v._v(" "),i("li",[v._v("如果没有对应的远程跟踪分支的话，可以用"),i("code",[v._v("git fetch")]),v._v("去远程仓库拿\n"),i("ul",[i("li",[v._v("将一个已经存在的本地分支名，跟踪一个远程跟踪分支\n"),i("ul",[i("li",[i("code",[v._v("git branch -u 远程跟踪分支名")])]),v._v(" "),i("li",[v._v("没有远程跟踪分支的话，无法进行"),i("code",[v._v("git push")]),v._v(","),i("code",[v._v("git pull")]),v._v("操作")]),v._v(" "),i("li",[v._v("可以用"),i("code",[v._v("gir branch -vv")]),v._v("查看当前分支所跟踪的远程跟踪分支")])])])])])]),v._v(" "),i("h4",{attrs:{id:"冲突"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#冲突"}},[v._v("#")]),v._v(" 冲突")]),v._v(" "),i("ol",[i("li",[v._v("当"),i("code",[v._v("git pull")]),v._v("的时候，没有将暂存区的内容提交时，会冲突")]),v._v(" "),i("li",[v._v("当"),i("code",[v._v("git push")]),v._v("的时候，远程仓库的内容已经被修改的时候，会冲突")])]),v._v(" "),i("h4",{attrs:{id:"删除远程分支"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#删除远程分支"}},[v._v("#")]),v._v(" 删除远程分支")]),v._v(" "),i("ol",[i("li",[i("code",[v._v("git push 仓库别名 --delete 远程分支")])]),v._v(" "),i("li",[i("code",[v._v("git remote prune 仓库别名--dry-run")]),v._v(" ：列出已经不存在的运程仓库上，仍在跟踪的无用分支")]),v._v(" "),i("li",[i("code",[v._v("git remote prune 仓库别名")]),v._v(" : 清楚上面列出的无用分支")])]),v._v(" "),i("h4",{attrs:{id:"pull-request"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#pull-request"}},[v._v("#")]),v._v(" Pull request")]),v._v(" "),i("ol",[i("li",[v._v("可以通过"),i("code",[v._v("fork")]),v._v("别人的项目，修别人的 bug，给别人提 request。（此步骤可以用 github 操作，不需要命令行）")]),v._v(" "),i("li",[v._v("一般只有大神才会用到。。")])]),v._v(" "),i("h3",{attrs:{id:"学习过程笔记"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#学习过程笔记"}},[v._v("#")]),v._v(" 学习过程笔记")]),v._v(" "),i("ol",[i("li",[i("code",[v._v("git checkout")]),v._v("后面也可以跟提交对象的 hash 值，让 HEAD 移动到对应提交对象")]),v._v(" "),i("li",[i("code",[v._v("git branch -f xxxx HEAD~3")]),v._v(" 强制移动分支 xxxx 到前三个提交对象身上")]),v._v(" "),i("li",[i("code",[v._v("git branch -f xxxx 提交对象hash")]),v._v(" 强制移动分支 xxxx 到某个提交对象")]),v._v(" "),i("li",[i("code",[v._v("git checkout HEAD^[HEAD~]")]),v._v(" 移动 HEAD 到上一个提交对象上\n"),i("ul",[i("li",[v._v("~后面跟数字表示移动几个提交对象")]),v._v(" "),i("li",[v._v("^后面跟数字表示移动第几个父提交（当前提交类型为合并提交的情况下）")]),v._v(" "),i("li",[v._v("如 "),i("code",[v._v("git checkout HEAD~2^2")]),v._v(" 表示向上移动两个提交对象，然后在二叉口，移动到第二个父提交对象\n"),i("ul",[i("li",[v._v("正如你所见，此命令支持链式调用")])])])])]),v._v(" "),i("li",[i("code",[v._v("git reset HEAD^")]),v._v(" 将提交对象重置回上一次提交对象")]),v._v(" "),i("li",[i("code",[v._v("git revert HEAD^")]),v._v(" 创建一个新的提交对象，这个提交对象是上一个提交对象的复刻，此方法比较安全。")]),v._v(" "),i("li",[i("code",[v._v("git cherry-pick [hash或者分支名] [hash或者分支名]")]),v._v(" 此命令可以在当前分支获取其它分支的正在进行的代码，可以接多个 commitHash，命令中接了几个 commitHash,就会获得几个提交对象。\n"),i("ul",[i("li",[i("code",[v._v("cherry-pick")]),v._v("还可以让 master 分支直接去拿多个分支，合成大分支")])])]),v._v(" "),i("li",[i("code",[v._v("git rebase branchName")]),v._v(" 将当前的分支线上的若干个目标分支线上不存在的提交对象的 code 与目标分支的 code 结合，并在目标分支下面生成若干个提交对象，提交对象上的还是当前分支\n"),i("ul",[i("li",[v._v("情景：假如自己开发的分支开发到一半，然后之前的 master 分支已经被提交过，这时需要提交完的 master 分支中自己分支里没有的代码时，就可以用这个命令，轻松获得")]),v._v(" "),i("li",[i("code",[v._v("git rebase 分支1 分支2")]),v._v(" 在分支 2 下生成分支 1 和分支 2 结合的提交对象")])])]),v._v(" "),i("li",[i("code",[v._v("git rebase -i HEAD~4")]),v._v(" 可以指定当前提交对象之前的若干个提交对象，\n"),i("ul",[i("li",[v._v("这些提交对象可以排序，也可以删减。来构建自己想要 rebase 的提交对象顺序和个数")]),v._v(" "),i("li",[i("code",[v._v("git cherry-pick")]),v._v("在知道 hash 的情况下牛逼，相反，这个命令是在不知道 hash 的情况下牛逼，总之两个挺像的")])])]),v._v(" "),i("li",[i("code",[v._v("git rebase xxxx master")]),v._v(" 当处在 xxxx 分支上，且想要与 master 合并时，此步骤可以代替下面两步\n"),i("ul",[i("li",[i("code",[v._v("git checkout master")])]),v._v(" "),i("li",[i("code",[v._v("git merge xxxx")])])])]),v._v(" "),i("li",[v._v("一般能用 hash 值直接定位的地方，也能用"),i("code",[v._v("HEAD~")]),v._v("配合"),i("code",[v._v("HEAD^")]),v._v("来找该地方（相对位置找法）")]),v._v(" "),i("li",[v._v("一般能用 hash 值的命令也能用分支名字")])]),v._v(" "),i("h3",{attrs:{id:"学习过程笔记-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#学习过程笔记-2"}},[v._v("#")]),v._v(" 学习过程笔记 2")]),v._v(" "),i("ol",[i("li",[v._v("远程跟踪分支是无法进行手动更新的，只能保持上一次通信时的状态。")]),v._v(" "),i("li",[v._v("如果"),i("code",[v._v("git checkout 远程跟踪分支")]),v._v("的话，会产生 HEAD 分离\n"),i("ul",[i("li",[v._v("即变成了"),i("code",[v._v("git checkout HEAD")])])])]),v._v(" "),i("li",[i("code",[v._v("git fetch")]),v._v(" "),i("ul",[i("li",[v._v("与远程仓库进行通信")]),v._v(" "),i("li",[v._v("更新远程跟踪分支")]),v._v(" "),i("li",[i("strong",[v._v("注意")]),v._v("："),i("code",[v._v("git fetch")]),v._v(" 并不会去改变本地仓库分支的位置。就是单纯的更新远程跟踪分支。")]),v._v(" "),i("li",[v._v("即：把远程分支上的内容给下载到了远程跟踪分支上而已。没有再进行其他的操作了。")])])]),v._v(" "),i("li",[i("code",[v._v("git pull")]),v._v(" "),i("ul",[i("li",[i("code",[v._v("git fetch")]),v._v(" + "),i("code",[v._v("git merge")])]),v._v(" "),i("li",[i("code",[v._v("git fetch")]),v._v("只是下载。"),i("code",[v._v("git pull")]),v._v("是下载+合并")])])]),v._v(" "),i("li",[i("code",[v._v("git pull --rebase")]),v._v(" "),i("ul",[i("li",[i("code",[v._v("git fetch")]),v._v(" + "),i("code",[v._v("git rebase")])])])]),v._v(" "),i("li",[i("code",[v._v("git merge")]),v._v(" 与"),i("code",[v._v("git rebase")]),v._v("的优缺点\n"),i("ul",[i("li",[i("code",[v._v("git merge")]),v._v(" 保留提交树的历史，有时候可能看起来很乱")]),v._v(" "),i("li",[i("code",[v._v("git rebase")]),v._v(" 所有提交都在一条树上，不保留历史。看起来更简洁")])])])]),v._v(" "),i("h3",{attrs:{id:"速记"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#速记"}},[v._v("#")]),v._v(" 速记")]),v._v(" "),i("ol",[i("li",[i("code",[v._v('ssh-keygen -t rsa -C "gitHub上注册时用的邮箱"')]),v._v(" :注册 ssh")])])])}),[],!1,null,null,null);_.default=e.exports}}]);