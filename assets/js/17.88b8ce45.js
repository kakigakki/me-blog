(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{471:function(a,t,s){"use strict";s.r(t);var e=s(8),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"如何设计索引系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何设计索引系统"}},[a._v("#")]),a._v(" 如何设计索引系统")]),a._v(" "),s("p",[a._v("前置知识：MySQL 每次读取磁盘都是读取 16k.")]),a._v(" "),s("p",[a._v("索引存储在磁盘中，查询数据的时候会优先将索引加载到内存中")]),a._v(" "),s("h3",{attrs:{id:"mysql-的索引系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-的索引系统"}},[a._v("#")]),a._v(" MySQL 的索引系统")]),a._v(" "),s("h4",{attrs:{id:"为什么不用哈希表作为索引的数据结构？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么不用哈希表作为索引的数据结构？"}},[a._v("#")]),a._v(" 为什么不用哈希表作为索引的数据结构？")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("缺点")]),a._v(" "),s("ul",[s("li",[a._v("哈希冲突会造成数据散列不均匀，会产生大量的线性查询，浪费时间")]),a._v(" "),s("li",[a._v("不支持范围，但进行范围查询的时候，需要遍历")]),a._v(" "),s("li",[a._v("对于内存空间的要求比较高")])])]),a._v(" "),s("li",[s("p",[a._v("优点")]),a._v(" "),s("ul",[s("li",[a._v("等值查询会很快")])])])]),a._v(" "),s("h4",{attrs:{id:"为什么要使用-b-树作为存储数据的数据结构？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用-b-树作为存储数据的数据结构？"}},[a._v("#")]),a._v(" 为什么要使用 B+树作为存储数据的数据结构？")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("因为其他的树如二叉树，平衡二叉树都是只有两个分叉，存的数据太多时，树的深度会非常大")])]),a._v(" "),s("li",[s("p",[a._v("b 树的各个节点也存储数据，且数据占用空间大，所以能存储的数据比较小")])]),a._v(" "),s("li",[s("p",[a._v("b+树只在叶子节点存储数据，其他父节点只存储指针和索引，所以索引越小，能存储的索引越多，读表速度就会提升")])])]),a._v(" "),s("h4",{attrs:{id:"聚簇索引，非聚簇索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#聚簇索引，非聚簇索引"}},[a._v("#")]),a._v(" 聚簇索引，非聚簇索引")]),a._v(" "),s("ul",[s("li",[a._v("是否是聚簇索引取决于 B+树中的叶子节点里数据跟索引是否是放在一起的，如果是非聚簇索引，B+树中的叶子节点里，非聚簇索引放的是聚簇索引，先通过非聚簇索引找到聚簇索引，再通过聚簇索引找数据")]),a._v(" "),s("li",[a._v("innodb 存储只能有一个聚簇索引，向 innodb 插入数据的时候，必须要包含一个索引的 key 值,这个 key 值，可以是主键，如果没有主键，那么就是唯一键，如果没有唯一键，那么就是一个自生成的 6 字节的 rowid")]),a._v(" "),s("li",[a._v("innodb 可以有很多非聚簇索")])]),a._v(" "),s("h4",{attrs:{id:"回表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回表"}},[a._v("#")]),a._v(" 回表")]),a._v(" "),s("p",[a._v("当根据普通索引查询到聚簇索引的 key 值之后，再根据 key 值在聚簇索引中获取所有行的数据")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//假设有一张表，有id,name,age,gender四个字段，id是主键，name是索引列。此时id为聚簇索引，name为非聚簇索引")]),a._v("\n\nselect "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" table where name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'zhangsan'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//上面sql文，先根据name索引查询id，再根据id查询整行的记录。走了2棵b+树。这种现场叫做回表")]),a._v("\n")])])]),s("h4",{attrs:{id:"索引覆盖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引覆盖"}},[a._v("#")]),a._v(" 索引覆盖")]),a._v(" "),s("p",[a._v("根据索引可以直接查询到所有索引列的值，直接返回即可。不需要从聚簇索引查询任何数据，此时叫做索引覆盖。比回表效率高。只走了一棵 b+树")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("select id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" table where name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'zhangsan'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//上面sql文，就是索引覆盖。不需要再通过聚簇索引查询整行记录")]),a._v("\n")])])]),s("h4",{attrs:{id:"最左匹配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最左匹配"}},[a._v("#")]),a._v(" 最左匹配")]),a._v(" "),s("p",[a._v("使用组合索引的时候必须先匹配组合中的左边索引列，再匹配右边索引列")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//假如有name,age的组合索引，下列是sql中组合索引生效情况")]),a._v("\nselect id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" table where name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//用")]),a._v("\nselect id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" table where name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v(" and age "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//用")]),a._v("\nselect id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" table where age"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//不用")]),a._v("\nselect id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" table where age "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v(" and name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 用，因为mysql内部有优化器，会调整对应的顺序")]),a._v("\n")])])]),s("h4",{attrs:{id:"索引下推"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引下推"}},[a._v("#")]),a._v(" 索引下推")]),a._v(" "),s("p",[a._v("根据组合索引的多个索引列，直接在存储引擎中获取对应的数据")]),a._v(" "),s("p",[a._v("补充： 数据库一般有三层： client（可视化工具） > server（MySQL 服务） > 存储引擎(innodb)")]),a._v(" "),s("h2",{attrs:{id:"事务和锁机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务和锁机制"}},[a._v("#")]),a._v(" 事务和锁机制")]),a._v(" "),s("h3",{attrs:{id:"事务的特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务的特性"}},[a._v("#")]),a._v(" 事务的特性")]),a._v(" "),s("ol",[s("li",[a._v("原子性,一致性，隔离性，持久性")])]),a._v(" "),s("h3",{attrs:{id:"事务并发的三大问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务并发的三大问题"}},[a._v("#")]),a._v(" 事务并发的三大问题")]),a._v(" "),s("ul",[s("li",[a._v("脏读:两次相同的查询操作，第二次查询操作读取到其他事务未提交的数据，导致两次数据不一样，则称为脏读")]),a._v(" "),s("li",[a._v("不可重复读 ： 两次相同的查询操作，因为其他的事物进行了更新（update/delete）操作，读到不一样的结果称为不可重复读")]),a._v(" "),s("li",[a._v("幻读 ： 两次相同的查询操作，因为其他的事物进行了新增（insert）操作，读到不一样的结果称为幻读")])]),a._v(" "),s("h3",{attrs:{id:"事务的四种隔离级别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务的四种隔离级别"}},[a._v("#")]),a._v(" 事务的四种隔离级别")]),a._v(" "),s("p",[a._v("为了解决上面三大问题，提供事务的一致性，各种数据库都提供了一套标准。")]),a._v(" "),s("ul",[s("li",[a._v("Read Uncommitted（未提交读）：无法解决任何问题")]),a._v(" "),s("li",[a._v("Read Commited（已提交读）：解决脏读")]),a._v(" "),s("li",[a._v("Repeatable Read（可重复读）: 解决脏读，不可重复读")]),a._v(" "),s("li",[a._v("Serializable（串行化）：可以解决任何问题，因为所有事务排队进行执行，所以慢")])]),a._v(" "),s("h3",{attrs:{id:"事务隔离级别的解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务隔离级别的解决方案"}},[a._v("#")]),a._v(" 事务隔离级别的解决方案")]),a._v(" "),s("ol",[s("li",[a._v("第一种： LBCC(lock based concurrency control) :在读取数据前，对其加锁。阻止其他事务对数据进行修改")])]),a._v(" "),s("ol",[s("li",[a._v("第二种：MVCC(Multi Version Concurrency Control):生成一个数据请求时间点的一致性数据快照。并用这个快照来提供一定级别（语句级或事务级）的一致性读取")])]),a._v(" "),s("h2",{attrs:{id:"锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#锁"}},[a._v("#")]),a._v(" 锁")]),a._v(" "),s("p",[a._v("锁的类型一般为两种：表锁与行锁\n表锁与行锁的区别：")]),a._v(" "),s("ul",[s("li",[a._v("锁定粒度：表锁>行锁")]),a._v(" "),s("li",[a._v("加锁效率：表锁>行锁")]),a._v(" "),s("li",[a._v("冲突概率：表锁>行锁")]),a._v(" "),s("li",[a._v("并发性能：表锁<行锁")])]),a._v(" "),s("h3",{attrs:{id:"行锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行锁"}},[a._v("#")]),a._v(" 行锁")]),a._v(" "),s("p",[a._v("行锁按类型分，可以分为共享锁，和排他锁")]),a._v(" "),s("h4",{attrs:{id:"共享锁（s-锁-shared-lock）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#共享锁（s-锁-shared-lock）"}},[a._v("#")]),a._v(" 共享锁（S 锁,shared lock）")]),a._v(" "),s("p",[a._v("又称为"),s("strong",[a._v("读锁")]),a._v("，顾名思义，就是多个事务能共享一把锁，都能访问到数据，但是只能读，"),s("strong",[a._v("不能进行修改")]),a._v("，通过这一个锁，能直接把事务隔离级别提高到"),s("code",[a._v("Serializable")]),a._v("级别，因为"),s("code",[a._v("delete,insert,update")]),a._v("都用不了了")]),a._v(" "),s("ul",[s("li",[a._v("加锁方式："),s("code",[a._v("select * from student where id = 1 lock in share mode")])]),a._v(" "),s("li",[a._v("释放锁方式："),s("code",[a._v("commit/rollback")])])]),a._v(" "),s("h4",{attrs:{id:"排他锁（x-锁-exclusive-lock）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#排他锁（x-锁-exclusive-lock）"}},[a._v("#")]),a._v(" 排他锁（X 锁,exclusive lock）")]),a._v(" "),s("p",[a._v("又称为"),s("strong",[a._v("写锁")]),a._v(",排他锁不能与其他锁并存，如一个事务获取了一个数据行的排他锁，其他事务就不能再获取该行的锁（共享锁，排他锁），只有该获取了排他锁的事务"),s("strong",[a._v("可以对数据进行读取和修改操作")])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("加锁方式：")]),a._v(" "),s("ul",[s("li",[a._v("自动：delete/insert/update 语句默认加上排他锁")]),a._v(" "),s("li",[a._v("手动："),s("code",[a._v("select * from student where id = 1 for update")])])])]),a._v(" "),s("li",[s("p",[a._v("释放锁方式："),s("code",[a._v("commit/rollback")])])])]),a._v(" "),s("p",[a._v("行锁按算法分，可以分为记录锁，间隙锁，临键锁")]),a._v(" "),s("h4",{attrs:{id:"记录锁-record-lock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#记录锁-record-lock"}},[a._v("#")]),a._v(" 记录锁(record lock)")]),a._v(" "),s("p",[a._v("锁触发条件：只包含记录的查询\n唯一性索引（唯一/主键）等职查询，精准匹配，锁单条记录\n通过这一个锁就能解决"),s("code",[a._v("脏读")]),a._v(" "),s("img",{attrs:{src:"https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20210207151506.png",alt:"20210207151506"}})]),a._v(" "),s("h4",{attrs:{id:"间隙锁-gap-lock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#间隙锁-gap-lock"}},[a._v("#")]),a._v(" 间隙锁(gap lock)")]),a._v(" "),s("p",[a._v("锁触发条件：记录不存在\n锁住不存在的区间，防止其他事务进行插入（insert）操作\n因为间隙锁的存在，innodb 在"),s("code",[a._v("可重复读")]),a._v("级别就能解决 "),s("code",[a._v("幻读")]),a._v(",而不需要将事务隔离级别提高到"),s("code",[a._v("Serializable")]),a._v("级别\n"),s("img",{attrs:{src:"https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20210207151648.png",alt:"20210207151648"}})]),a._v(" "),s("h4",{attrs:{id:"临键锁-next-key-lock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#临键锁-next-key-lock"}},[a._v("#")]),a._v(" 临键锁(next-key lock)")]),a._v(" "),s("p",[a._v("锁触发条件：包含区间，记录的范围查询\n锁住不存在的区间和该区间的下一条记录，防止其他事务进行插入（insert）操作\n"),s("img",{attrs:{src:"https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20210207151801.png",alt:"20210207151801"}})]),a._v(" "),s("h3",{attrs:{id:"表锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表锁"}},[a._v("#")]),a._v(" 表锁")]),a._v(" "),s("p",[a._v("当对该表的行加共享锁或者排他锁的时候，会对该表加上"),s("strong",[a._v("意向锁")]),a._v("和"),s("strong",[a._v("意向排他锁")]),a._v("来标记该表已经有某行被锁，能让其他事务判断是否能给该表加锁（否则需要全表扫描判断是否有行被锁了后，其他事务才能进行表加锁操作）。提高加锁的效率")]),a._v(" "),s("h4",{attrs:{id:"意向锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#意向锁"}},[a._v("#")]),a._v(" 意向锁")]),a._v(" "),s("p",[a._v("当改表的某行加了共享锁，该表就会加上意向锁")]),a._v(" "),s("h4",{attrs:{id:"意向排他锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#意向排他锁"}},[a._v("#")]),a._v(" 意向排他锁")]),a._v(" "),s("p",[a._v("当该表的某行加了排他锁，该表就会加上意向排他锁")])])}),[],!1,null,null,null);t.default=r.exports}}]);