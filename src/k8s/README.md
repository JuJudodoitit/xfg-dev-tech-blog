---
title: k8s
icon: mug-saucer
index: false
expanded: true
category:
- k8s
---
# k8s

## k8s集群
### Master Node
Master节点主要由API Server、Controller-Manager、Scheduler以及etch四个组件构成。

### Worker Node
Worker节点主要由kubelet、kube-proxy以及容器运行时构成。

### 四种网络通信
- 同一Pod内容器间的通信
- 各Pod彼此间的通信
- Pod与Service间的通信
- 集群外部与Service间的通信
