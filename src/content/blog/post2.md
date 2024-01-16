---
title: "Object Segmentation"
description: "Overview of Instance and Semantic Segmentation"
pubDate: "April 26, 2020"
heroImage: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*B16t8Do6hvuq2Q_2YOM-UQ.png"
badge: ""
tags: ["object Segmentation"]
---

2020 has taught to the world numerous things. First being, humans are still not ready to face situations like a global pandemic. Technology is taking a transformation to fill up the empty shoes of services when humans are quarantined. That’s why extensive research and progress is going on in the field of Medical imaging and Self-driving cars which can help mankind in indoor and outdoor solutions.

Object Segmentation is one such method that is being used in these intelligence systems and still, every day more and more papers and algorithms are developing. This article will help to get a naive understanding of the image segmentation problem.

 **Object Segmentation or Image segmentation is termed as categorizing each pixel value of an image to a particular class.**

# **Use-cases in the real world:**

1.  Face segmentation: Doing semantic segmentation can help computer vision systems achieve tasks like the recognition of expressions, age recognition, and the prediction of gender of the ethnicity of individuals.  Semantic segmentation enables these tasks by separating regions of the face into important attributes like the mouth, chin, nose, eyes, and hair.
2.  Medical imaging: Image segmentation is used in medical diagnostics especially in evaluating X-ray analysis and MRI scans.  Systems making use of semantic segmentation can help classify relevant  regions of an image, making diagnostic tests easier and simpler.
3.  Self-Driving: Autonomous driving is an extremely complex task that needs real-time perception, analysis, and change. Semantic segmentation is used to  identify objects like other cars and traffic signs and regions like road lanes and sidewalks. Instance segmentation is used in  autonomous  driving, as individual cars, pedestrians, signs, etc.
4.  Satellite image processing:  Aerial or satellite images cover a large span of land area  and contain many objects. Semantic segmentation has been used to analyse land usage, areas suffered from deforestation, analysis of agricultural land etc.

# **Difference between Segmentation and Detection:**

By applying Object Detection models, we will only be able to build a bounding box corresponding to each class in the image. But it will  not tell anything about the shape of the object as the bounding boxes are either rectangular or square in shape. Image segmentation will create pixel-wise masks for each object hence it will be useful to understand  granular details about the object.

**Types of Image segmentation:**

1.  Semantic Segmentation 2) Instance Segmentation

**Semantic segmentation**: Semantic Segmentation is the process of assigning a label to every pixel in the image. This is in stark contrast to classification, where a  single label is assigned to the entire picture.  Semantic segmentation treats multiple objects of the same class as a single entity.

**Instance segmentation**:  Instance segmentation treats multiple objects of the same class as distinct individual objects  (or instances). Typically,  instance segmentation is harder than semantic segmentation.

![](https://miro.medium.com/v2/resize:fit:1400/1*aTWrOeKFSCOnMJoTH96NVg.png)

[[link](https://www.topbots.com/semantic-segmentation-guide/)]

# **Evaluation metrics:**

**Intersection over Union(IoU method)**: The IoU metric measures the number of pixels common between the target and prediction masks divided by the total number of pixels present across  _both_  masks.

![](https://miro.medium.com/v2/resize:fit:738/1*dOaafm03mju8i23X1Cq6zQ.png)

Calculation metric for Intersection over Union

![](https://miro.medium.com/v2/resize:fit:1400/1*E49dKsrbemG1L6JOBgZshw.png)

**Pixel-wise precision/ recall accuracy:**

When considering the per-class pixel accuracy we’re essentially evaluating a binary mask; a true positive represents a pixel that is correctly predicted to belong to the given class (according to the target mask) whereas a true negative represents a pixel that is correctly identified as not belonging to the given class.

![](https://miro.medium.com/v2/resize:fit:988/1*xNGkCGAjBxFZAT6BYw1lGQ.png)

Accuracy metric for pixel-wise accuracy

# **Datasets:**

1. UCI image segmentation datasets[1]

2. COCO dataset for segmentation[2]

3. PASCAL VOC 2012[3]

4. CityScapes dataset[4]

5. KITTI semantic segmentation dataset[5]

# **State of the Art Research in the field of image segmentation:**

> These state of the art methods are known hugely in the field of image segmentation. Currently Profound research is going on in the image segmentation field and there are so many advanced repository and papers are coming up everyday. But, to get started with segmentation as a novice person. These papers are the best to refer to.

**Few important papers in image segmentation:**

1.  [_Fully Convolutional Networks for Semantic Segmentation_](https://www.cv-foundation.org/openaccess/content_cvpr_2015/papers/Long_Fully_Convolutional_Networks_2015_CVPR_paper.pdf)

_2._ [_SegNet: A Deep Convolutional Encoder-Decoder Architecture for Image Segmentation_](https://arxiv.org/pdf/1511.00561.pdf)

_3._ [_Multi-Scale Context Aggregation by Dilated Convolutions_](http://vladlen.info/papers/dilated-convolutions.pdf)

_4._ [_DeepLab v1 and v2_](https://arxiv.org/abs/1606.00915)

_5._ [_RefineNet: Multi-Path Refinement Networks for High-Resolution Semantic Segmentation_](https://arxiv.org/abs/1611.06612)

_6._ [_PSPNet_](https://arxiv.org/abs/1612.01105)

_7._ [_U-Net: Convolutional Networks for Biomedical Image Segmentation_](https://arxiv.org/abs/1505.04597)

_8._ [_Mask R-CNN_](https://arxiv.org/abs/1703.06870)

**GitHub Repositories:**

1.  [Facebook Detectron](https://github.com/facebookresearch/Detectron)

2. [Mask-R CNN](https://github.com/matterport/Mask_RCNN)

For all the reference papers and GitHub repositories, you can check it out here. You’ll find almost everything you need.  [https://github.com/mrgloom/awesome-semantic-segmentation](https://github.com/mrgloom/awesome-semantic-segmentation)

> If you have managed to reach here, then I believe you are a part of the elite group who have thorough understanding to get started in the captivating problem of object segmentation.
> 
> Please feel free to share your thoughts and ideas in the comment section below.
> 
> If you think that article was helpful, please do share it and also clap(s) would hurt no one.

# **References:**

1.  [http://archive.ics.uci.edu/ml/datasets/image+segmentation](http://archive.ics.uci.edu/ml/datasets/image+segmentation)
2.  [http://cocodataset.org/](http://cocodataset.org/)
3.  [http://host.robots.ox.ac.uk/pascal/VOC/voc2012/htmldoc/index.html](http://host.robots.ox.ac.uk/pascal/VOC/voc2012/htmldoc/index.html)
4.  [https://www.cityscapes-dataset.com/](https://www.cityscapes-dataset.com/)
5.  [http://www.cvlibs.net/datasets/kitti/eval_semantics.php](http://www.cvlibs.net/datasets/kitti/eval_semantics.php)
6.  [https://www.jeremyjordan.me/evaluating-image-segmentation-models/](https://www.jeremyjordan.me/evaluating-image-segmentation-models/)
