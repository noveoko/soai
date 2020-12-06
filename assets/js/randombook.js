console.log("randombook.js loaded")

const books = `
Beowulf: An Anglo-Saxon Epic Poem 
Pride and Prejudice by Jane Austen 
Alice's Adventures in Wonderland by Lewis Carroll 
The Yellow Wallpaper by Charlotte Perkins Gilman 
Anthem by Ayn Rand 
Frankenstein; Or, The Modern Prometheus by Mary Wollstonecraft Shelley 
The Scarlet Letter by Nathaniel Hawthorne 
Et dukkehjem. English by Henrik Ibsen 
A Modest Proposal by Jonathan Swift 
The Adventures of Sherlock Holmes by Arthur Conan Doyle 
The Strange Case of Dr. Jekyll and Mr. Hyde by Robert Louis Stevenson 
Walden, and On The Duty Of Civil Disobedience by Henry David Thoreau 
Metamorphosis by Franz Kafka 
The Republic by Plato 
The Souls of Black Folk by W. E. B. Du Bois 
A Tale of Two Cities by Charles Dickens 
Moby Dick; Or, The Whale by Herman Melville 
Narrative of the Life of Frederick Douglass, an American Slave by Frederick Douglass 
Il Principe. English by Niccolò Machiavelli 
Grimms' Fairy Tales by Jacob Grimm and Wilhelm Grimm 
Adventures of Huckleberry Finn by Mark Twain 
The Adventures of Tom Sawyer by Mark Twain 
Treasure Island by Robert Louis Stevenson 
Dracula by Bram Stoker 
The Iliad by Homer 
A Christmas Carol in Prose; Being a Ghost Story of Christmas by Charles Dickens 
The Soul Eaters by William Conover 
Jane Eyre: An Autobiography by Charlotte Brontë 
The Secret Garden by Frances Hodgson Burnett 
Peter Pan by J. M. Barrie 
The Importance of Being Earnest: A Trivial Comedy for Serious People by Oscar Wilde 
Heart of Darkness by Joseph Conrad 
The Awakening, and Selected Short Stories by Kate Chopin 
Narrative of the Captivity and Restoration of Mrs. Mary Rowlandson by Mary White Rowlandson 
Great Expectations by Charles Dickens 
The Call of the Wild by Jack London 
The Picture of Dorian Gray by Oscar Wilde 
The Interesting Narrative of the Life of Olaudah Equiano, Or Gustavus Vassa, The African by Equiano 
Leviathan by Thomas Hobbes 
Dubliners by James Joyce 
The Prophet by Kahlil Gibran 
Second Treatise of Government by John Locke 
Moby Word Lists by Grady Ward 
Little Women by Louisa May Alcott 
The Odyssey by Homer 
Siddhartha by Hermann Hesse 
Autobiography of Benjamin Franklin by Benjamin Franklin 
The Count of Monte Cristo, Illustrated by Alexandre Dumas 
War and Peace by graf Leo Tolstoy 
The Legend of Sleepy Hollow by Washington Irving 
The Hound of the Baskervilles by Arthur Conan Doyle 
The Autobiography of Benjamin Franklin by Benjamin Franklin 
The War of the Worlds by H. G. Wells 
The Slang Dictionary: Etymological, Historical and Andecdotal by John Camden Hotten 
Emma by Jane Austen 
The Happy Prince, and Other Tales by Oscar Wilde 
Uncle Tom's Cabin by Harriet Beecher Stowe 
The Philippine Islands, 1493-1898 — Volume 07 of 55 
Ulysses by James Joyce 
Frankenstein; Or, The Modern Prometheus by Mary Wollstonecraft Shelley 
A Study in Scarlet by Arthur Conan Doyle 
Anne of Green Gables by L. M. Montgomery 
A History of the Philippines by David P. Barrows 
The Masque of the Red Death by Edgar Allan Poe 
The Jungle by Upton Sinclair 
Wuthering Heights by Emily Brontë 
Incidents in the Life of a Slave Girl, Written by Herself by Harriet A. Jacobs 
Don Quixote by Miguel de Cervantes Saavedra 
Tractatus Logico-Philosophicus by Ludwig Wittgenstein 
The Wonderful Wizard of Oz by L. Frank Baum 
Common Sense by Thomas Paine 
The Wonderful Wizard of Oz by L. Frank Baum 
The Philippine Islands, 1493-1898, Volume 33, 1519-1522 by Antonio Pigafetta 
A Journal of the Plague Year by Daniel Defoe 
Doctrina Christiana 
The White Comrade, and Other Poems by Katherine Hale 
Men Who Have Made the Empire by George Chetwynd Griffith 
The Century Illustrated Monthly Magazine, October, 1913 by Various 
Boys of the Central by I. T. Thurston 
Ethan Frome by Edith Wharton 
The Problems of Philosophy by Bertrand Russell 
Candide by Voltaire 
Pygmalion by Bernard Shaw 
Don Juan by Baron George Gordon Byron Byron 
David Copperfield by Charles Dickens 
Treasure of the Brasada by Les Savage 
Les Misérables by Victor Hugo 
Morning in the West: A Book of Verse by Katherine Hale 
Poetics. English by Aristotle 
The Brothers Karamazov by Fyodor Dostoyevsky 
The Confessions of St. Augustine by Bishop of Hippo Saint Augustine 
The Turn of the Screw by Henry James 
Lysistrata by Aristophanes 
The Jungle Book by Rudyard Kipling 
Prestuplenie i nakazanie. English by Fyodor Dostoyevsky 
Index of Project Gutenberg Works on Black History by Various 
Songs of Innocence, and Songs of Experience by William Blake 
The Forme of Cury: A Roll of Ancient English Cookery Compiled, about A.D. 1390 by Samuel Pegge 
The Republic of Plato by Plato 
The Kama Sutra of Vatsyayana by Vatsyayana`.split("\n")

const youtube = {math:[
    "Numberphile",
    "patrickJMT",
    "TheSimpleMaths",
    "Khan academy",
    "tecmath",
    "Math Antics", 
    "3Blue1Brown", 
    "standupmaths", 
    "Mickal Launay", 
    "Math Meeting", 
    "Eddie Woo", 
    "mathtutordvd", 
    "Professor Leonard", 
    "Brian McLogan", 
    "Elia Bombardelli", 
    "NUMBEROCK Math Songs", 
    "yaymath", 
    "ProfRobBob", 
    "Mathispower4u", 
    "TheTrevTutor", 
    "Mathbyfives", 
    "Mario's Math Tutoring", 
    "Math & Learning Videos 4 Kids", 
    "Math Tricks",
    "MyWhyU",
    "Duane Habecker", 
    "Fort Bend Tutoring",
    "The Math Sorcerer",
    "5th Grade Math with Mr. J",
    "njwildberger",
    "Uploads by Tipping Point Math", 
    "MashUp Math", 
    "TeacherTube Math", 
    "MathTV", 
    "Math Mammoth", 
    "Maths Adultes", 
    "mrmaisonet",
    "Brandon Craft",
    "Math Easy Solutions", 
    "MinuteMath", 
    "Math Mania", 
    "Maths Platter", 
    "Michelle Krummel", 
    "ChannelBTech", 
    "Letstute CBSE MATH", 
    "Mathsaurus", 
    "WOWmath.org", 
    "MathsStatsUNSW", 
    "Buchanan High School Math Department", 
    "Cole's World of Mathematics", 
    "Mathematics Videos", 
    "Kyle Pearce", 
    "Stacey Roshan", 
    "The Free Math Tutor", 
    "Kendrick Krause", 
    "Maths Partner", 
    "mathwithmrbarnes", 
    "901 Math", 
    "Ms Shaws Math Class", 
    "calculuscoaches", 
    "the AllAroundMathGuy", 
    "Mark Willis", 
    "Mathematics Proofs - GCSE & A Level", 
    "Pottorff Math", 
    "mrgrahammaths", 
    "MathCabin", 
    "Mr Bodgers", 
    "Taylor Dupuy's Math Vlog", 
    "Ms. Smith's Math Tutorials", 
    "Mr Bdubs Math and Physics", 
    "TheBeautyofMath", 
    "Soukaina's Teaching", 
    "Joel Speranza Math", 
    "Myhre Math MCHS",
    "Geometry Common Core"],
    science:["Vsauce",
    "AsapSCIENCE",
    "SmarterEveryDay",
    "Kurzgesagt – In A Nutshell",
    "SciShow",
    "Veritasium",
    "Minute Physics",
    "It’s Okay To Be Smart",
    "Periodic Videos",
    "Home Science",
    "Science Magazine",
    "AsapSCIENCE",
    "minutephysics",
    "Veritasium",
    "CrashCourse",
    "SciShow",
    "thebrainscoop",
    "Physics Girl",
    "MinuteEarth",
    "CEN Online",
    "World Science Festival",
    "Talk Nerdy To Me",
    "Periodic Videos",
    "Reactions",
    "Applied Science",
    "acapellascience",
    "Deep Astronomy",
    "Interactive Biology"],
    datascience:["Sentdex",
        "3Blue1Brown",
        "freeCodeCamp.org",
        "Deep Learning with PyTorch",
        "StatQuest with John Starmer",
        "Krish Naik",
        "Corey Schafer",
        "Tech with Tim",
        "Brandon Foltz",
        "365 Data Science"
    ]}

    const machineLearning = {General:["Adam",
    "SGD",
    "Causal Inference",
    "ADMM",
    "RMSProp",
    "Residual Block",
    "Bottleneck Residual Block",
    "Dense Block",
    "Inverted Residual Block",
    "ResNeXt Block",
    "Multi-Head Attention",
    "Scaled Dot-Product Attention",
    "Additive Attention",
    "Dot-Product Attention",
    "SAGAN Self-Attention Module",
    "Adam",
    "SGD",
    "RMSProp",
    "SGD with Momentum",
    "AdaGrad",
    "Dropout",
    "Weight Decay",
    "Attention Dropout",
    "Label Smoothing",
    "Entropy Regularization",
    "ReLU",
    "Sigmoid Activation",
    "Tanh Activation",
    "GELU",
    "Leaky ReLU",
    "Layer Normalization",
    "Batch Normalization",
    "Local Response Normalization",
    "Instance Normalization",
    "Spectral Normalization",
    "Scaled Dot-Product Attention",
    "Additive Attention",
    "Dot-Product Attention",
    "Location-based Attention",
    "Content-based Attention",
    "Multi-Head Attention",
    "SAGAN Self-Attention Module",
    "Spatial Attention Module",
    "Channel Attention Module",
    "DV3 Attention Block",
    "Cycle Consistency Loss",
    "GAN Least Squares Loss",
    "Focal Loss",
    "Triplet Loss",
    "GAN Hinge Loss",
    "Linear Warmup With Linear Decay",
    "Linear Warmup With Cosine Annealing",
    "Step Decay",
    "Cosine Annealing",
    "Exponential Decay",
    "Contrastive Predictive Coding",
    "SimCLR",
    "MoCo",
    "BiGAN",
    "MoCo v2",
    "ProxylessNAS",
    "Neural Architecture Search",
    "PNAS",
    "DNAS",
    "DetNAS",
    "Dense Connections",
    "Feedforward Network",
    "Linear Layer",
    "Highway Network",
    "HyperNetwork",
    "Auxiliary Classifier",
    "Highway Layer",
    "Channel Shuffle",
    "PixelShuffle",
    "Scatter Connection",
    "LIME",
    "CAM",
    "SHAP",
    "Agglomerative Contextual Decomposition",
    "Disentangled Attribution Curves",
    "Softmax",
    "Mixture of Logistic Distributions",
    "Heatmap",
    "Adaptive Softmax",
    "Sparsemax",
    "Contrastive Predictive Coding",
    "MoCo",
    "Noisy Student",
    "MoCo v2",
    "Gradual Self-Training",
    "CIDA",
    "Singular Value Clipping",
    "PCIDA",
    "AdvProp",
    "DiffAugment",
    "PatchGAN",
    "Projection Discriminator",
    "Window-based Discriminator",
    "NIMA",
    "Multiple Random Window Discriminator",
    "Memory Network",
    "Neural Turing Machine",
    "Dynamic Memory Network",
    "End-To-End Memory Network",
    "Recurrent Entity Network",
    "Embedded Gaussian Affinity",
    "Embedded Dot Product Affinity",
    "Concatenation Affinity",
    "Gaussian Affinity",
    "OHEM",
    "ATSS",
    "IoU-Balanced Sampling",
    "SVM",
    "Gaussian Process",
    "k-NN",
    "MFEC",
    "Metropolis Hastings",
    "reSGLD",
    "CSGLD",
    "PCA",
    "LDA",
    "ICA",
    "AE",
    "k-Means Clustering",
    "SOM",
    "SCAN-clustering",
    "Metropolis Hastings",
    "reSGLD",
    "CSGLD",
    "MDL",
    "AutoML-Zero",
    "Shape Adaptor",
    "SVM",
    "Gaussian Process",
    "k-NN",
    "Residual Connection",
    "Concatenated Skip Connection",
    "Zero-padded Shortcut Connection",
    "Kaiming Initialization",
    "Xavier Initialization",
    "CRF",
    "LTLS",
    "Random Search",
    "Population Based Training",
    "LAMB",
    "LARS",
    "NAM",
    "Base Boosting",
    "Discriminative Fine-Tuning",
    "Logistic Regression",
    "Linear Regression",
    "Gumbel Softmax",
    "MAML",
    "MeRL",
    "Weight Decay",
    "L1 Regularization",
    "FLICA",
    "Truncation Trick",
    "Latent Optimisation",
    "Weight Tying",
    "Demon",
    "Affine Coupling",
    "Residual Normal Distribution",
    "Self-Adversarial Negative Sampling",
    "HFPSO",
    "Estimation Statistics",
    "Normalizing Flows",
    "Discrete Cosine Transform",
    "NetAdapt",
    "Siamese Network"],
    "Computer Vision":["ResNet",
    "AlexNet",
    "VGG",
    "DenseNet",
    "MobileNetV2",
    "ResNet",
    "AlexNet",
    "VGG",
    "DenseNet",
    "MobileNetV2",
    "Residual Block",
    "Bottleneck Residual Block",
    "Dense Block",
    "Inception Module",
    "Squeeze-and-Excitation Block",
    "AutoEncoder",
    "GAN",
    "VAE",
    "CycleGAN",
    "Denoising Autoencoder",
    "Faster R-CNN",
    "Mask R-CNN",
    "SSD",
    "RetinaNet",
    "YOLOv3",
    "Convolution",
    "1x1 Convolution",
    "Grouped Convolution",
    "Pointwise Convolution",
    "Depthwise Convolution",
    "GAN",
    "CycleGAN",
    "WGAN",
    "StyleGAN",
    "DCGAN",
    "Convolution",
    "1x1 Convolution",
    "Grouped Convolution",
    "Pointwise Convolution",
    "Depthwise Convolution",
    "FPN",
    "Bottom-up Path Augmentation",
    "PAFPN",
    "TUM",
    "BiFPN",
    "Mixup",
    "Random Resized Crop",
    "Random Horizontal Flip",
    "ColorJitter",
    "AutoAugment",
    "SSD",
    "RetinaNet",
    "YOLOv3",
    "YOLOv2",
    "FCOS",
    "U-Net",
    "FCN",
    "SegNet",
    "DeepLab",
    "ENet",
    "Max Pooling",
    "Average Pooling",
    "Global Average Pooling",
    "Spatial Pyramid Pooling",
    "Center Pooling",
    "VAE",
    "VQ-VAE",
    "PixelCNN",
    "GLOW",
    "Beta-VAE",
    "FPN",
    "Bottom-up Path Augmentation",
    "PAFPN",
    "BiFPN",
    "NAS-FPN",
    "RoIPool",
    "RoIAlign",
    "Position-Sensitive RoI Pooling",
    "Precise RoI Pooling",
    "Position-Sensitive RoIAlign",
    "Mask R-CNN",
    "Cascade Mask R-CNN",
    "PANet",
    "HTC",
    "GCNet",
    "Non Maximum Suppression",
    "Soft-NMS",
    "DIoU-NMS",
    "IoU-guided NMS",
    "Adaptive NMS",
    "Pyramid Pooling Module",
    "ASPP",
    "Global Convolutional Network",
    "PointRend",
    "Point-wise Spatial Attention",
    "RPN",
    "Selective Search",
    "DeepMask",
    "EdgeBoxes",
    "Laplacian Pyramid"],
    "Natural Language Processing":["BERT", "Transformer", "ELMo", "RoBERTa", "GPT-2", "BERT", "Transformer", "RoBERTa", "GPT-2", "XLNet", "Transformer", "GPT-2", "XLNet", "GPT", "Transformer-XL", "GloVe", "ELMo", "fastText", "Skip-gram Word2Vec", "USE", "BERT", "RoBERTa", "ALBERT", "XLM", "DistilBERT", "Strided Attention", "Fixed Factorized Attention", "Sliding Window Attention", "Dilated Sliding Window Attention", "Global and Sliding Window Attention", "GloVe", "fastText", "Skip-gram Word2Vec", "CBoW Word2Vec", "lda2vec", "ELMo", "CoVe", "USE", "context2vec", "Cross-View Training", "Dense Synthesized Attention", "Random Synthesized Attention", "Factorized Random Synthesized Attention", "Factorized Dense Synthesized Attention", "BPE", "WordPiece", "Unigram Segmentation", "WordPiece", "SentencePiece", "Seq2Seq", "lda2vec", "lda2vec", "Adaptive Input Representations", "Deep LSTM Reader", "Neural Cache"],
    "Reinforcement Learning":["PPO", "REINFORCE", "DDPG", "A2C", "A3C", "Q-Learning", "DQN", "Double Q-learning", "Clipped Double Q-learning", "Double DQN", "DQN", "Double DQN", "Dueling Network", "Rainbow DQN", "REM", "Sarsa", "Expected Sarsa", "TD Lambda", "True Online TD Lambda", "Sarsa Lambda", "Eligibility Trace", "Accumulating Eligibility Trace", "Dutch Eligibility Trace", "Replacing Eligibility Trace", "N-step Returns", "V-trace", "Retrace", "Stochastic Dueling Network", "Monte-Carlo Tree Search", "GA", "4D A*", "AlphaZero", "MuZero", "TD-Gammon", "Experience Replay", "Prioritized Experience Replay", "Noisy Linear Layer", "REM", "CARLA", "AlphaStar", "Ape-X", "IMPALA", "Prioritized Sweeping", "Epsilon Greedy Exploration"],
    "Sequential":["LSTM", "BiLSTM", "GRU", "ConvLSTM", "Pointer Network", "Seq2Seq", "Pointer Network", "Tacotron", "BART", "T5", "Dilated Causal Convolution", "Causal Convolution", "Gated Convolution", "DynamicConv", "TaLK Convolution", "BiLSTM", "BiGRU", "CNN BiLSTM", "DTW", "FLICA", "Low Rank Tensor Learning Paradigms", "TD-VAE", "CBHG"],
    "Audio":["DV3 Convolution Block", "DV3 Attention Block", "MelGAN Residual Block", "Bridge-net", "GBlock", "WaveNet", "WaveGAN", "WaveGlow", "WaveRNN", "MelGAN", "Tacotron", "Tacotron 2", "ClariNet", "Deep Voice 3", "GAN-TTS", "Phase Shuffle", "Griffin-Lim Algorithm", "CBHG"],
    "Graphs":["LINE", "node2vec", "DeepWalk", "TransE", "VERSE", "GCN", "GAT", "MPNN", "SchNet", "RGCN"]}
    
function randomChoice(items){
    return items[Math.floor(Math.random()*items.length)]
}

function randomBook(){
    console.log("Random book fetched!")
    return books[Math.floor(Math.random()*books.length)]
}

function randomYoutube(){
    console.log("Random youtube fetched!")
    let keys = Object.keys(youtube);
    let topic = keys[Math.floor(Math.random()*keys.length)]
    let topicList = youtube[topic]
    let channel = topicList[Math.floor(Math.random()*topicList.length)]
    return {channel:channel,topic:topic}
}

function randomML(){
    console.log("Random ML topic fetched!")
    let keys = Object.keys(machineLearning);
    let topic = keys[Math.floor(Math.random()*keys.length)]
    let topicList = machineLearning[topic]
    let channel = topicList[Math.floor(Math.random()*topicList.length)]
    return {channel:channel,topic:topic}
}

function appIdea(){
    let sizes = ['microscopic','tiny','small','normal-sized','large','giant','immense','enormous']
    let materials = ['stone','glass','aluminum','titanium','cobalt','plastic','bamboo']
    let action = ['transporation','transformation','disorientation','reclassification',
    'identification','pseudostratification', 'triboelectrification', 'counterqualification', 
    'phacoemulsification', 'interstratification', 'cartilaginification', 'transesterification', 
    'phakoemulsification', 'bourgeoisification', 'biodiversification', 'transmogrification', 
    'oversimplification', 'microcalcification', 'dissyllabification', 'transrectification', 
    'neurovitrification', 'underspecification', 'polyesterification', 'spaghettification', 
    'recorporification', 'semivitrification', 'hydrogasification', 'misclassification', 
    'appersonification', 'hypocalcification', 'micromodification', 'decommodification', 
    'transignification', 'misidentification', 'disqualification', 'consignification', 
    'presignification', 'biomagnification', 'studentification', 'unsanctification', 
    'declassification', 'reclassification', 'deboursification', 'saccharification', 
    'deidentification', 'reidentification', 'compactification', 'precertification', 
    'dehumidification', 'prequalification', 'autovivification', 'destratification', 
    'cylindrification', 'categorification', 'bioamplification', 'indemnification', 
    'personification', 'desertification', 'exemplification', 'commodification', 
    'frenchification', 'deacidification', 'syllabification', 'decalcification', 
    'decertification', 'recertification', 'prenotification', 'refortification', 
    'demystification', 'objectification', 'devitrification', 'diversification', 
    'latensification', 'intensification', 'electrification', 'denitrification', 
    'dezincification', 'recalcification', 'despecification', 'preachification', 
    'speechification', 'demythification', 'sublimification', 'fossilification', 
    'incarnification']
    let price = ["affordable","expensive","cheap","fairly-priced"]
    let benefit = ["fast","clean","easy-to-use","portable","robust","anti-fragile","strong","powerful","impressive"]
    let object = ["sofa","coffee table","dresser","wooden chair","plush chair","shoe","hammer","pliers","iron","spray bottle","baby bottle",
    "toothbrush","toothpaste","clothespin","teapot", "teacup","coffeepot","coffee mug","orange juice box","milk jug","spoon","fork","knife",
    "power outlet","book","briefcase","telephone","desk lamp",
    "standing lamp","rolling office chair","footstool","kitchen table","toilet","bathtub",
    "bathroom sink","ornate mirror","stove","refrigerator","soap dispenser","tape dispenser",
    "stapler","toothbrush","toothpaste","umbrella"]
    return `A ${randomChoice(sizes)} ${randomChoice(object)} for the ${randomChoice(action)} of ${randomChoice(object)}s that is ${randomChoice(price)} and ${randomChoice(benefit)}`
}

