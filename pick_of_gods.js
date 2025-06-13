const { Client, IntentsBitField, PermissionsBitField, VoiceChannel } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource } = require('@discordjs/voice');
const translate = require('@vitalets/google-translate-api');
const math = require('mathjs');ts } = require('discord.js');
const fs = require('fs');natural');
const fetch = require('node-fetch');
const translate = require('@vitalets/google-translate-api');
const Fuse = require('fuse.js'); // For fuzzy search, install with npm if needed
require('dotenv').config(););
const config = require('./config/config.json');
// Load Firebase credentials
const admin = require('firebase-admin');
const serviceAccount = require('./config/firebase-credentials.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: config.firebaseDatabaseURL // or hardcode if you prefer
});
const COMMAND_PREFIX = '!';
// Load environment variables (API keys, tokens, etc.)
// --- AI State & Knowldge ---: 'C:\\Users\\krist\\CelestialArtisansbot\\.env' });
class RuneScapeAI {({ credential: admin.credential.cert(require('./firebase-credentials.json')), databaseURL: "https://your-project.firebaseio.com" });
  constructor() {database();
    this.memory = [];
    this.supportedActivities = [
      { trigger: /archaeology/i, directions: "Head to the nearest dig site and use your mattock on soil patches. Don't forget to screen your soil!" },
      { trigger: /farming run/i, directions: "Teleport to each patch using your farming cape or lodestones. Plant, compost, and harvest in this order: herb, allotment, flower, tree." },
      { trigger: /dungeoneering/i, directions: "Enter Daemonheim, form a party, and select your floor. Use your map to navigate and solve puzzles as you go!" },
      { trigger: /slayer/i, directions: "Check your current task, gear up for the monster, and use the Slayer Tower or Slayer Dungeon portals for quick travel." },
      { trigger: /boss/i, directions: "Check your gear and inventory, eat up, and use the boss portal in War's Retreat. Remember to pray accordingly!" },
      { trigger: /clue scroll/i, directions: "Open your clue scroll, read the clue, and use the Wiki or Alt1 Clue Solver overlay for step-by-step help." },
      { trigger: /yak track/i, directions: "Open the Yak Track interface, pick a task, and follow the instructions. Use the Wiki for Yak Track tips!" },
      { trigger: /invention/i, directions: "Disassemble unwanted items, siphon your augmented gear, and use the Invention workbench for gizmos and perks." },
      { trigger: /divination/i, directions: "Head to the highest-level wisp colony you can access, harvest memories, and convert them at the energy rift." }
    ];
    this.learnedActivities = [];
    this.learnedItems = [];the bot has admin permissions in the guild
    this.visualNotes = {}; // Store visual learning overlays by user
  }ry {
    const botMember = await guild.members.fetch(client.user.id);
  remember(interaction) {ember.permissions.has(PermissionsBitField.Flags.Administrator);
    this.memory.push(interaction);
    if (this.memory.length > 100) this.memory.shift();ave Administrator permissions in guild: ${guild.name}`);
  } }
    return hasAdmin;
  getLastInteractions(n = 5) {
    return this.memory.slice(-n); admin permissions:', err);
  } return false;
  }
  matchActivity(text) {
    let found = this.supportedActivities.find(a => a.trigger.test(text));
    if (!found) {ls = new Map();
      found = this.learnedActivities.find(a => a.trigger.test(text));hanged 'cob' to 'cab'
    } chatMemory = new Map();
    return found;el = new natural.BayesClassifier();
  }st playerData = new Map();
const voiceConnections = new Map();
  learnActivity(trigger, directions) {
    try {
      const regex = new RegExp(trigger, "i");
      this.learnedActivities.push({ trigger: regex, directions }); required)
      return true;H_URL = 'https://api.duckduckgo.com/';
    } catch {API_URL = 'https://api.duckduckgo.com/'; // Also fallback to DuckDuckGo
      return false;
    }t.once('ready', async () => {
  }onsole.log('Radiant XP descends! Celestial Artisan\'s Goddess awakens at ' + new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' }));
  console.log('Accessible via ngrok: https://g.dev/Celestial_Artisan_bot');
  learnItem(name, icon2d, model3d, keywords = []) {ill');
    this.learnedItems.push({ name, icon2d, model3d, keywords });
  }earningModel.addDocument('quest runescape', 'quest');
  learningModel.addDocument('channel discord', 'discord');
  findItem(query) {Document('role discord', 'discord');
    const allItems = [...this.learnedItems, ...Object.values(RS_ITEM_MODELS)];
    const searcher = new Fuse(allItems, { keys: ['name', 'keywords'], threshold: 0.4 });
    const fuzzyResult = searcher.search(query);', 'economy');
    return fuzzyResult.length > 0 ? fuzzyResult[0].item : null;
  }earningModel.addDocument('next step runescape', 'quest');
  learningModel.addDocument('price of runescape', 'economy');
  // --- Visual Learning: Store and recall overlays ---est');
  // Now: Connect visuals to item models by label or item name
  saveVisualNote(userId, note) {
    if (!this.visualNotes[userId]) this.visualNotes[userId] = [];: match actual folder name and casing
    // If the label matches a learned item or model, link them
    const linkedItem = this.findItem(note.label, Fuse);
    if (linkedItem) {f files) {
      note.linkedItem = {.js') && file !== 'bot2.js') {
        name: linkedItem.name,fs.readFile(`${dir}\\${file}`, 'utf8');
        icon2d: linkedItem.icon2d,ord') || content.includes('runescape')) {
        model3d: linkedItem.model3dit('\n');
      };  lines.forEach(line => {
    }       const match = line.match(/(\w+)\s*[:=]\s*['"]?([^'"\n]+)['"]?/);
    this.visualNotes[userId].push(note);des('command') || match[1].includes('response'))) {
    if (this.visualNotes[userId].length > 10) this.visualNotes[userId].shift();y
  }           if (!chatMemory.has('legacy')) chatMemory.set('legacy', new Set());
              chatMemory.get('legacy').add(match[2]);
  getVisualNotes(userId) {
    return this.visualNotes[userId] || [];
  }     }
      }
  // --- AI Self-Knowledge: List and explain all functions ---
  getCapabilities() {
    return [error('File read error:', error);
      "**RuneScape Alt1 AI Companion Capabilities:**",
      "- `quest overlay <quest>`: Fetches and overlays quest steps from the RuneScape Wiki. Use `next step` to advance.",
      "- `item model <item>`: Finds and displays 2D/3D models and info for RuneScape items using local, learned, and external databases.",
      "- `flip profit <item>` or `flip margin <item>`: Calculates and displays flipping profit margins using Flipaholics.",
      "- `wiki <query>`: Searches the RuneScape Wiki for information.",
      "- `flip <query>`: Searches Flipaholics for item prices.",
      "- `ely <query>`: Searches Ely.gg for item prices.",
      "- `translate <lang> <text>`: Translates text to the specified language.",
      "- `search <query>`, `find <query>`, `lookup <query>`: Performs a general web search and provides instant answers and links.",
      "- `ai memory`: Shows the last few user interactions remembered by the AI.",
      "- `teach activity <trigger> | <directions>`: Teach me a new activity and how to guide it.",
      "- `teach item <name> | <2d icon url> | <3d model url> | <keywords,comma,separated>`: Teach me a new item for recognition.",
      "- `teach visual <label> | <x> | <y> | <width> | <height> | <color>`: Teach me to visually highlight a region in Alt1 overlays.",
      "- `show visuals`: Show your learned visual overlays in Alt1.",
      "- All overlays and instructions are text only. The bot never clicks or types for you.",
      "- Overlay instructions are shown in Alt1 if available, or as a fallback in Discord."
    ].join('\n');
  }Helper to write to shared memory (used for overlay/data exchange)
}sync function writeToSharedMemory(data) {
  await ensureDirectory(path.dirname(SHARED_MEMORY_FILE));
const ai = new RuneScapeAI();EMORY_FILE, JSON.stringify(data, null, 2), 'utf8');
}
// --- NOTE: ALT1 BOT DOES NOT USE MOUSE OR KEYBOARD ---
// All instructions, directions, and search results are presented as text only.
// The bot never performs clicks, types, or interacts with the RuneScape client directly.
// It only provides overlays, links, and step-by-step instructions for the player to follow manually.
    const data = await fs.readFile(SHARED_MEMORY_FILE, 'utf8');
// --- Alt1 Overlay Integration ---
function isAlt1() {
  return typeof window !== "undefined" && window.alt1 && window.alt1.permissionPixel;
} }
}
function showAlt1Overlay(text) {
  if (!isAlt1()) return "Alt1 overlay not detected or permissions missing.";
  if (window.displayOverlayText) {ext, userId = null) {
    window.displayOverlayText(text);
    return "Directions sent to your Alt1 overlay!";
  } text,
  alert(text);
  return "Directions shown in overlay (alert fallback).";
} });
}
// --- Online Search Helpers ---
const RS_WIKI = 'https://runescape.wiki/';data from bot2.js
const FLIPAHOLICS = 'https://flipaholics.pro/';
const ELY_GG = 'https://www.ely.gg/';mory();
  if (data.type === 'overlay') {
async function fetchWikiData(query) {
  try {
    const response = await fetch(`${RS_WIKI}w/index.php?search=${encodeURIComponent(query)}&fulltext=1`);
    const text = await response.text();
    return text.includes('No results') ? "No results found on the Wiki." : `Check ${RS_WIKI}w/index.php?search=${encodeURIComponent(query)} for the scoop!`;
  } catch (error) { HANDLER ---
    console.error('Wiki error:', error);e) => {
    return 'Wiki is not responding right now.';
  }f (!awakeChannels.has(message.channel.id)) return;
}
  // Example: Save overlay to shared memory when a command is received
async function fetchFlipaholicsData(query) {)) {
  try {st overlayText = message.content.replace('!overlay ', '').trim();
    const response = await fetch(`${FLIPAHOLICS}search?q=${encodeURIComponent(query)}`);
    const text = await response.text(); sent to shared memory for Alt1 or bot2.js to use.");
    return text.includes('not found') ? "No results found on Flipaholics." : `Flipaholics has this: ${FLIPAHOLICS}search?q=${encodeURIComponent(query)}`;
  } catch (error) {
    console.error('Flipaholics error:', error);
    return 'Flipaholics is not responding right now.';e used for status checks)
  }f (message.content.trim() === '!getoverlay') {
}   const overlay = await getOverlayFromBot2();
    if (overlay) {
async function fetchElyGGData(query) {"${overlay.text}" (set by user ${overlay.userId})`);
  try {lse {
    const response = await fetch(`${ELY_GG}search?q=${encodeURIComponent(query)}`);
    const text = await response.text();
    return text.includes('no results') ? "No results found on Ely.gg." : `Ely.gg dug up: ${ELY_GG}search?q=${encodeURIComponent(query)}`;
  } catch (error) {
    console.error('Ely.gg error:', error);
    return 'Ely.gg is not responding right now.';e();
  }onst isMentioned = botNames.some(name => lowerContent.includes(name));
} const channelId = message.channel.id;

// --- Additional AI Search Outlets ---ulti-room, multi-server support
const GOOGLE_SEARCH = 'https://www.google.com/search?q=';d, new Set());
const BING_SEARCH = 'https://www.bing.com/search?q=';
const YOUTUBE_SEARCH = 'https://www.youtube.com/results?search_query=';
const REDDIT_SEARCH = 'https://www.reddit.com/search/?q=';
  const learnedCategory = learningModel.getClassifications(lowerContent)[0]?.label || 'general';
  // --- General Web Search Helper ---tent, learnedCategory);
function buildSearchLinks(query) {
  return [up on mention and stay active until told "cab sleep"
    `[Google](${GOOGLE_SEARCH}${encodeURIComponent(query)})`,
    `[Bing](${BING_SEARCH}${encodeURIComponent(query)})`,
    `[YouTube](${YOUTUBE_SEARCH}${encodeURIComponent(query)})`,ld Man is here—ask, and perhaps you'll learn a thing or two!");
    `[Reddit](${REDDIT_SEARCH}${encodeURIComponent(query)})`
  ].join(' | ');
}
  // Stay in conversation until "cab sleep" is said
// --- DuckDuckGo API (no key required) ---
async function fetchDuckDuckGo(query) {p')) {
  try {wakeChannels.delete(channelId);
    const response = await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_redirect=1&no_html=1`);
    const data = await response.json();et(channelId);
    if (data.AbstractText) return data.AbstractText;n') conn.destroy();
    if (data.RelatedTopics && data.RelatedTopics.length > 0 && data.RelatedTopics[0].Text)
      return data.RelatedTopics[0].Text;
    return null;ply("A nap, you say? Even the Wise Old Man needs his rest. Farewell for now, and may your bank remain untrimmed! Zzz...");
  } catch (e) {
    return null;
  }
}   // --- GITHUB REPO INFO ---
    if (lowerContent.startsWith('github repo')) {
// --- Flip Profit Margin Helper ---ch(/github repo\s+([\w-]+)\/([\w.-]+)/);
async function getFlipProfitInfo(itemName) {
  try { const owner = match[1];
    // Try Flipaholics first];
    const flipUrl = `${FLIPAHOLICS}search?q=${encodeURIComponent(itemName)}`;
    const response = await fetch(flipUrl);
    const text = await response.text();
      }
    // Simple regex to extract buy/sell prices (adjust as needed for actual site structure)
    const buyMatch = text.match(/Buy Price:\s*([\d,]+)/i);
    const sellMatch = text.match(/Sell Price:\s*([\d,]+)/i);
    if (message.content.startsWith('!adminsay')) {
    if (buyMatch && sellMatch) {ssage.guild.members.fetch(client.user.id);
      const buyPrice = parseInt(buyMatch[1].replace(/,/g, ''), 10);nistrator)) {
      const sellPrice = parseInt(sellMatch[1].replace(/,/g, ''), 10);o that, young adventurer!");
      const profit = sellPrice - buyPrice;
      const margin = ((profit / buyPrice) * 100).toFixed(2);h).trim();
      if (sayMsg) {
      return `**${itemName}**\nBuy Price: ${buyPrice.toLocaleString()} gp\nSell Price: ${sellPrice.toLocaleString()} gp\nProfit per flip: ${profit.toLocaleString()} gp (${margin}% margin)\n[Flipaholics Link](${flipUrl})`;
    } else { {
      return `Could not extract flip data for "${itemName}". Try checking manually: ${flipUrl}`;
    } }
  } catch (error) {
    return `Error fetching flip info for "${itemName}". Try checking manually: ${FLIPAHOLICS}search?q=${encodeURIComponent(itemName)}`;
  }
}   // --- HELP COMMAND ---
    if (message.content.trim() === `${COMMAND_PREFIX}help`) {
// --- Quest Walkthrough Fetcher & Overlay Stepper ---
async function fetchQuestWalkthrough(questName) {
  // Try to fetch from the RuneScape Wiki quest guide+
  const url = `https://runescape.wiki/api.php?action=parse&page=${encodeURIComponent(questName + " (quest)")}&prop=text&formatversion=2&format=json`;
  try { "- Use `github repo owner/repo` for GitHub info.\n" +
    const response = await fetch(url); roles, or permissions.\n" +
    const data = await response.json(); if you ask about group or private chats.\n" +
    if (!data.parse || !data.parse.text) return null;
        "- I will never help with real-world trading or forbidden topics.\n" +
    // Extract steps from the wiki HTML (very basic, can be improved)es'!"
    const html = data.parse.text;
    // Simple regex to get list items (steps)
    const steps = [];
    const stepRegex = /<li>(.*?)<\/li>/g;
    let match;G COMMAND ---
    while ((match = stepRegex.exec(html)) !== null) {ping`) {
      // Remove HTML tags from step textMan is listening.");
      const stepText = match[1].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim();
      if (stepText.length > 10) steps.push(stepText);
      if (steps.length >= 10) break; // Limit to first 10 steps for overlay
    }/ --- RANDOM TIP COMMAND ---
    return steps.length ? steps : null;OMMAND_PREFIX}tip`) {
  } catch (error) {s3Tips[Math.floor(Math.random() * rs3Tips.length)];
    return null;ply(`Wise Old Man's Tip: ${tip}`);
  }   return;
}   }

// --- Overlay Click Guidance (textual, not actual clicks) ---
function overlayQuestSteps(steps) {COMMAND_PREFIX) && !message.content.startsWith('!adminsay') && !message.content.startsWith('!help') && !message.content.startsWith('!ping') && !message.content.startsWith('!tip')) {
  if (!isAlt1()) return "Alt1 overlay not detected or permissions missing.";p` for a list of things I can do.");
  if (window.displayOverlayText) {
    // Show each step as a numbered instruction
    window.displayOverlayText(
      steps.map((step, i) => `${i + 1}. ${step}`).join('\n\n')
    ); (isInGameTrade(message.content)) {
    return "Quest steps sent to your Alt1 overlay!";rades and use the Grand Exchange or secure in-game methods. If something seems too good to be true, it probably is!");
  } }
  alert(steps.map((step, i) => `${i + 1}. ${step}`).join('\n\n'));
  return "Quest steps shown in overlay (alert fallback).";
}   if (learnedCategory === 'voice' && message.member.voice && message.member.voice.channel) {
      const voiceChannel = message.member.voice.channel;
// --- RuneScape Item Model Understanding (2D/3D) ---
// Now supports multiple sources and more robust recognition
          channelId: voiceChannel.id,
// --- External Item Databases ---d,
const RS_WIKI_API = "https://runescape.wiki/api.php";reator,
const RS3_ITEMDB_API = "https://api.weirdgloop.org/exchange/history/rs/latest";
const OSRSBOX_API = "https://rs3.weirdgloop.org/api/item-details/search.json"; // Community-maintained, may be incomplete
        message.reply("The Wise Old Man has joined your voice channel! Speak up, and I'll listen.");
// --- Local Example Item Model Database (expand as needed) ---
const RS_ITEM_MODELS = {
  4151: {
    name: "Abyssal whip",O ---
    icon2d: "https://runescape.wiki/images/Abyssal_whip.png",
    model3d: "https://www.runescape.com/3d-model-viewer?item=4151",: 10 });
    keywords: ["whip", "abyssal", "melee", "weapon"]hor.bot && m.id !== message.id);
  },  if (botMessages.size > 0) {
  // ...other static items...ges.first().content;
};      message.reply(`I overheard another bot say: "${info}"`);
        return;
// --- Helper: Search local, then external sources, with fuzzy search ---
async function findItemModel(query) {
  const q = query.toLowerCase();
    // --- MAIN Q&A/CONVERSATION LOGIC ---
  // 1. Fuzzy search local static DB
  const localItems = Object.values(RS_ITEM_MODELS);TimeString('en-US', { timeZone: 'America/Chicago' })}]: Author=${message.author.username}, Context=${learnedCategory}, Query="${message.content}"\n`;
  const fuse = new Fuse(localItems, { keys: ['name', 'keywords'], threshold: 0.4 });
  const fuzzyResult = fuse.search(query);.content) || lowerContent.includes('what') || lowerContent.includes('where') || lowerContent.includes('how');
  if (fuzzyResult.length > 0) {
    const item = fuzzyResult[0].item;Online(message.content);
    return { ...item, source: "local" };rs withhold their wisdom—rephrase thy question!");
  }   thoughtLog += `Action: Researched online for "${message.content}"\n`;
      actionTaken = true;
  // 2. Search RuneScape Wiki API
  try {onst response = await chatResponse(message, channelMemory, keywords);
    const wikiResp = await fetch(`${RS_WIKI_API}?action=query&format=json&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=0`);
    const wikiData = await wikiResp.json();with the wisdom of many years!)");
    if (wikiData.query && wikiData.query.search && wikiData.query.search.length > 0) {
      const pageTitle = wikiData.query.search[0].title;
      // Try to get infobox image and item id
      const pageResp = await fetch(`${RS_WIKI_API}?action=parse&page=${encodeURIComponent(pageTitle)}&format=json&prop=images`);
      const pageData = await pageResp.json();
      let icon2d = null; ---
      if (pageData.parse && pageData.parse.images) {
        const img = pageData.parse.images.find(i => /icon|item|inventory/i.test(i));
        if (img) icon2d = `https://runescape.wiki/images/${encodeURIComponent(img)}`;
      }f (thoughtCache.get(channelId).length > 5) thoughtCache.get(channelId).shift();
      return {mpactCache = thoughtCache.get(channelId).join('').replace(/\n+/g, ' | ');
        id: pageTitle,send(`Wise Old Man's Notes: ${compactCache}`);
        name: pageTitle,
        icon2d: icon2d || "https://runescape.wiki/",
        model3d: `https://www.runescape.com/3d-model-viewer?item=${encodeURIComponent(pageTitle)}`,
        keywords: [pageTitle.toLowerCase()],
        source: "wiki"h, Discord! In my day, we just used carrier pigeons. Ask me about channels, roles, invites, or permissions—I've picked up a trick or two over the years.");
      };se if (channelMemory.has('runescape') || channelMemory.has('rs')) {
    } message.reply("RuneScape, eh? Now that's a name I haven't heard in a long time. Need help with quests, skills, or gear? The Wise Old Man is here to help—just don't ask me to trim your bank!");
  } catch (e) {
    // Ignore and try next source
  }

  // 3. Search Weirdgloop RS3 ItemDB (for item IDs and names)
  try {lt1 = false;
    const dbResp = await fetch(RS3_ITEMDB_API);o nothing
    const dbData = await dbResp.json();
    for (const id in dbData) {ed" && window.alt1) {
      const item = dbData[id];ow.alt1.permissionPixel;
      if (gateTo = function(panel) {
        item.name && ( panel or highlight something in Alt1
          item.name.toLowerCase() === q ||
          item.name.toLowerCase().includes(q)
        )dow.location.hash = "#home";
      } {1.info("The Wise Old Man has whisked you to the home panel!");
        return {e;
          id,
          name: item.name,s") {
          icon2d: `https://secure.runescape.com/m=itemdb_rs/obj_big.gif?id=${id}`,
          model3d: `https://www.runescape.com/3d-model-viewer?item=${id}`,rked!");
          keywords: [item.name.toLowerCase()],
          source: "weirdgloop"
        }; more navigation as needed
      }urn false;
    }
  } catch (e) {
    // Ignore and try next source
  }nc function chatResponse(message, memory, keywords) {
  const content = message.content;
  // 4. Search OSRSBox/Weirdgloop Community API (fallback)
  try { sentiment = new natural.SentimentAnalyzer('English', natural.PorterStemmer, 'afinn').getSentiment(keywords);
    const osrsboxResp = await fetch(OSRSBOX_API);
    const osrsboxData = await osrsboxResp.json();
    for (const id in osrsboxData) { years, I say: Discord is a fine tool for gathering adventurers. What do you wish to know, young one?";
      const item = osrsboxData[id];'runescape') || lowerContent.includes('rs')) {
      if (category = learningModel.getClassifications(lowerContent)[0].label;
        item.name && (ape! I remember when ${category} was all the rage. What more can I tell you, friend?`;
          item.name.toLowerCase() === q |||| lowerContent.includes('hi')) {
          item.name.toLowerCase().includes(q)ets you warmly. I sense your mood is ${sentiment > 0 ? 'bright as a freshly polished rune' : 'a bit gloomy—cheer up, it could be worse!'}`;
        )if (memory.has(lowerContent.split(' ')[0]) || (memory.get('legacy') && memory.get('legacy').has(lowerContent.split(' ')[0]))) {
      ) {n `You've mentioned ${lowerContent.split(' ')[0]} before, haven't you? The Wise Old Man never forgets... well, almost never.`;
        return {
          id, world is full of mysteries! Ask away, and perhaps this old wizard can help.";
          name: item.name,
          icon2d: item.icon || "",
          model3d: `https://www.runescape.com/3d-model-viewer?item=${id}`,
          keywords: [item.name.toLowerCase()],
          source: "osrsbox"fetch(`https://secure.runescape.com/m=hiscore/index_lite.ws?player=${encodeURIComponent(playerName)}`);
        };sponse.ok) {
      }onst text = await response.text();
    } const lines = text.trim().split('\n');
  } catch (e) {.length > 0) {
    // Ignore overall = lines[0].split(',').map(Number);
  }     return { rank: overall[0], level: overall[1], xp: overall[2] };
      }
  return null;
} } catch (error) {
    console.error('Hiscore fetch error:', error);
// --- Quest Overlay Step Navigation (queue/step-by-step) ---
let questStepCache = {};
}
const client = new Client({
  intents: [on fetchRunemetricsData(playerName) {
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,tps://apps.runescape.com/runemetrics/profile/profile?user=${encodeURIComponent(playerName)}&activities=20`);
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,son();
    GatewayIntentBits.DirectMessages
  ] }
}); catch (error) {
    console.error('Runemetrics fetch error:', error);
client.once('ready', () => {
  console.log(`Celestial Artisan's AI Companion (Alt1 Overlay Mode) is online at ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}`);
});

client.on('messageCreate', async message => {
  if (message.author.bot) return;ology runescape', 'skill');
  const content = message.content.toLowerCase(); 'skill');
  ai.remember({ user: message.author.username, content: message.content, time: Date.now() });
learningModel.addDocument('boss mechanics runescape', 'pvm');
  // --- Teach Visual Overlay Command ---ing runescape', 'economy');
  if (content.startsWith('teach visual ')) {pe', 'event');
    // Format: teach visual <label> | <x> | <y> | <width> | <height> | <color>
    const parts = message.content.replace(/^teach visual\s+/i, '').split('|');
    if (parts.length < 6) {achievement runescape', 'achievement');
      message.channel.send("Usage: teach visual <label> | <x> | <y> | <width> | <height> | <color>");
      return;.addDocument('reaper title runescape', 'pvm');
    }ingModel.addDocument('slayer codex runescape', 'collection');
    const [label, x, y, width, height, color] = parts.map(p => p.trim());
    const note = { label, x: Number(x), y: Number(y), width: Number(width), height: Number(height), color };
    ai.saveVisualNote(message.author.id, note);scape', 'drop');
    message.channel.send(`Learned new visual overlay: "${label}" at (${x},${y},${width},${height}) in ${color}.`);
    return;el.addDocument('grand exchange runescape', 'economy');
  }rningModel.addDocument('dailyscape runescape', 'routine');
learningModel.addDocument('vis wax runescape', 'routine');
  // --- Show Visual Overlays Command ---cape', 'activity');
  if (content === 'show visuals') {scape', 'activity');
    const visuals = ai.getVisualNotes(message.author.id);'activity');
    if (!visuals.length) {'player owned ports runescape', 'activity');
      message.channel.send("You haven't taught me any visual overlays yet.");
      return;.addDocument('boss timers runescape', 'pvm');
    }ingModel.addDocument('aura management runescape', 'meta');
    if (isAlt1() && window.displayOverlayBox) {nescape', 'meta');
      visuals.forEach(v => {evolution++ runescape', 'meta');
learningModel.addDocument('combat styles runescape', 'meta');
learningModel.addDocument('enrage mechanics runescape', 'pvm');
learningModel.addDocument('hardmode bosses runescape', 'pvm');
learningModel.addDocument('elite clues runescape', 'activity');
learningModel.addDocument('treasure trails runescape', 'activity');
learningModel.addDocument('farming runs runescape', 'routine');
learningModel.addDocument('herb runs runescape', 'routine');
learningModel.addDocument('dungeoneering runescape', 'skill');
learningModel.addDocument('arch-glacor runescape', 'boss');
learningModel.addDocument('zamorak boss runescape', 'boss');
learningModel.addDocument('telos runescape', 'boss');
learningModel.addDocument('solak runescape', 'boss');
learningModel.addDocument('nex angel of death runescape', 'boss');
learningModel.addDocument('ed3 runescape', 'pvm');
learningModel.addDocument('ed2 runescape', 'pvm');
learningModel.addDocument('ed1 runescape', 'pvm');
learningModel.addDocument('runescore runescape', 'achievement');
learningModel.addDocument('max cape runescape', 'achievement');
learningModel.addDocument('trimmed comp runescape', 'achievement');
learningModel.addDocument('pvm drop log runescape', 'drop');
learningModel.addDocument('drop rates runescape', 'drop');
learningModel.addDocument('boss pets runescape', 'pet');
learningModel.addDocument('skilling outfits runescape', 'meta');
learningModel.addDocument('xp rates runescape', 'meta');
learningModel.addDocument('best perks runescape', 'meta');
learningModel.addDocument('perks invention runescape', 'meta');
learningModel.addDocument('ancient magicks runescape', 'magic');
learningModel.addDocument('prayer switching runescape', 'meta');
learningModel.addDocument('overloads runescape', 'meta');
learningModel.addDocument('scrimshaws runescape', 'meta');
learningModel.addDocument('sigils runescape', 'meta');
learningModel.addDocument('reaper assignments runescape', 'pvm');
learningModel.addDocument('slayer tasks runescape', 'skill');
learningModel.addDocument('elite skill runescape', 'skill');
learningModel.addDocument('archaeology mysteries runescape', 'activity');
learningModel.addDocument('archaeology collections runescape', 'collection');
learningModel.addDocument('archaeology artefacts runescape', 'collection');
learningModel.addDocument('archaeology dig sites runescape', 'activity');
learningModel.addDocument('archaeology relics runescape', 'meta');
learningModel.addDocument('archaeology research runescape', 'activity');
learningModel.addDocument('archaeology soil runescape', 'activity');
learningModel.addDocument('archaeology materials runescape', 'activity');
learningModel.addDocument('archaeology experience runescape', 'meta');
learningModel.addDocument('archaeology training runescape', 'meta');
learningModel.addDocument('archaeology money runescape', 'economy');
learningModel.addDocument('archaeology best artefacts runescape', 'meta');
learningModel.addDocument('archaeology best collections runescape', 'meta');
learningModel.addDocument('archaeology best relics runescape', 'meta');
learningModel.addDocument('archaeology best training runescape', 'meta');
learningModel.addDocument('archaeology best money runescape', 'economy');
learningModel.addDocument('archaeology best experience runescape', 'meta');
learningModel.addDocument('archaeology best soil runescape', 'meta');
learningModel.addDocument('archaeology best materials runescape', 'meta');
learningModel.addDocument('archaeology best research runescape', 'meta');
learningModel.addDocument('archaeology best dig sites runescape', 'meta');
learningModel.addDocument('archaeology best mysteries runescape', 'meta');
learningModel.train();

// Helper to check for RWT (real-world trading) or forbidden topics
function isForbiddenRS3Topic(text) {
  const forbidden = [
    /buy.*gold/i,
    /sell.*gold/i,
    /buy.*account/i,
    /sell.*account/i,
    /buy.*item/i,
    /sell.*item/i,
    /rwt/i,
    /real.?world.?trade/i,
    /gp for (money|cash|usd|eur|paypal|bitcoin|btc|crypto)/i,
    /account shop/i,
    /item shop/i,
    /osrs/i, // Focus only on RS3, not OSRS
    /old school/i,
    /real[-\s]?money/i,
    /irl\s*(money|cash|usd|eur|paypal|bitcoin|btc|crypto)/i
  ];
  return forbidden.some(rx => rx.test(text));
}

// Helper to check for in-game trading (allowed)
function isInGameTrade(text) {
  // Looks for GE, Grand Exchange, or player-to-player trade language
  const allowed = [
    /grand exchange/i,
    /\bge\b/i,
    /trade.*(player|friend|other)/i,
    /player.*trade/i,
    /in[-\s]?game.*trade/i,
    /selling.*in game/i,
    /buying.*in game/i,
    /offer.*(ge|grand exchange)/i
  ];
  return allowed.some(rx => rx.test(text));
}

// --- Modify researchOnline to focus on RS3 and filter forbidden topics ---
async function researchOnline(query) {
  // Always focus on RuneScape 3, and filter forbidden topics
  if (isForbiddenRS3Topic(query)) {
    return "Sorry, young adventurer, I cannot assist with buying or selling gold, accounts, or items for real-world money. Such things are forbidden by the laws of Gielinor!";
  }
  if (isInGameTrade(query)) {
    return "Trading with other players or using the Grand Exchange is a core part of RuneScape 3! If you need tips on safe in-game trading, just ask.";
  }
  const rs3Query = `${query} runescape 3`;
  try {
    // DuckDuckGo Instant Answer API (no key required)
    const ddgResponse = await axios.get(CUSTOM_SEARCH_URL, {
      params: {
        q: rs3Query,
        format: 'json',
        no_redirect: 1,
        no_html: 1,
        skip_disambig: 1
      }
    });
    if (ddgResponse.data.AbstractText) {
      if (isForbiddenRS3Topic(ddgResponse.data.AbstractText)) {
        return "The Wise Old Man will not speak of forbidden trades or dealings!";
      }
      const firstTopic = ddgResponse.data.RelatedTopics[0];
      if (typeof firstTopic.Text === 'string' && !isForbiddenRS3Topic(firstTopic.Text)) {
        return `A bit of wisdom from my travels: ${firstTopic.Text}`;
      }
    }
    return "Even the Wise Old Man can't find an answer to that—try asking differently!";
  } catch (error) {
    console.error('Research error:', error);
    return "My old brain is a bit foggy—try again, or maybe fetch me a nice cup of tea!";
  }
}

// --- Modify searchRunescapeKnowledge to filter forbidden topics ---
async function searchRunescapeKnowledge(intent, itemOrQuest) {
  const combined = `${intent} ${itemOrQuest}`;
  if (isForbiddenRS3Topic(combined)) {
    return "Sorry, young adventurer, I cannot assist with buying or selling gold, accounts, or items for real-world money. Such things are forbidden by the laws of Gielinor!";
  }
  if (isInGameTrade(combined)) {
    return "Trading with other players or using the Grand Exchange is perfectly fine in RuneScape 3! Always use safe in-game methods and beware of scams.";
  }
  try {
    // Prefer RuneScape Wiki API for RS3
    const wikiApiUrl = `https://runescape.wiki/api.php?action=query&format=json&prop=extracts&exintro&explaintext&titles=${encodeURIComponent(itemOrQuest)}`;
    const wikiResponse = await fetch(wikiApiUrl);
    const wikiData = await wikiResponse.json();
    const pages = wikiData.query && wikiData.query.pages ? Object.values(wikiData.query.pages) : [];
    const extract = pages.length && pages[0].extract ? pages[0].extract : '';

    if (extract && !isForbiddenRS3Topic(extract)) {
      return `From the annals of the RuneScape 3 Wiki:\n${extract}`;
    }

    // Fallback to custom search if wiki fails
    const searchQuery = `${intent} ${itemOrQuest} runescape 3`;
    const response = await axios.get(CUSTOM_SEARCH_URL, {
      params: {
        q: searchQuery,
        num: 1
      }
    });
    const result = response.data.items?.[0]?.snippet || '';
    if (isForbiddenRS3Topic(result)) {
      return "The Wise Old Man will not speak of forbidden trades or dealings!";
    }
    if (isInGameTrade(result)) {
      return "Trading with other players or using the Grand Exchange is a core part of RuneScape 3! If you need tips on safe in-game trading, just ask.";
    }
    if (intent.includes('how much') || intent.includes('price of')) {
      return `Divine riches! The price of ${itemOrQuest} is nigh ${extractPrice(result) || 'unknown'} gp—consult the Grand Exchange!`;
    } else if (intent.includes('how many') || intent.includes('needed for')) {
      return `Celestial decree! Thou requirest ${extractQuantity(result) || 'an uncertain tally'} of ${itemOrQuest}—seek the scrolls!`;
    } else if (intent.includes('next step')) {
      return `Questing under my gaze! Thy next step in ${itemOrQuest} is ${extractStep(result) || 'veiled in stardust'}—proceed, mortal!`;
    } else if (result) {
      return `RuneScape 3 wisdom: ${result}`;
    }
    return "My celestial search dims—try anew, seeker!";
  } catch (error) {
    console.error('Custom search error:', error);
    return "My celestial search dims—try anew, seeker!";
  }
}

function extractPrice(text) {
  const match = text.match(/(\d{1,3}(?:,\d{3})*(?:\.\d+)?)\s*gp/i);
  return match ? match[1] : null;
}

function extractQuantity(text) {
  const match = text.match(/(\d+)\s*(?:x|items)/i);
  return match ? match[1] : null;
}

function extractStep(text) {
  const match = text.match(/next step[:\s]*(.+?)(?=\.|$)/i);
  return match ? match[1].trim() : null;
}

async function connectToPlayerSearch(displayName) {
  try {
    let runemetricsData = await fetchRunemetricsData(displayName);
    if (runemetricsData && runemetricsData.name) {
      return `Ah, ${displayName}! According to my dusty tomes: Rank ${runemetricsData.skills?.overall?.rank || 'N/A'}, Level ${runemetricsData.skills?.overall?.level || 'N/A'}, XP ${runemetricsData.skills?.overall?.xp || 'N/A'}. Anything else, young whippersnapper?`;
    }

    let hiscoreData = await fetchHiscoreData(displayName);
    if (hiscoreData) {
      return `Found ${displayName} in the Hiscores! Rank: ${hiscoreData.rank}, Level: ${hiscoreData.level}, XP: ${hiscoreData.xp}. Not bad for a youngster!`;
    }

    return "Hmm, can't find that adventurer. Maybe they're hiding, or maybe my spectacles need cleaning!";
  } catch (error) {
    console.error('Player search error:', error);
    return "Oh dear, something went wrong with my search. Try again, or bring me a cup of tea!";
  }
}

// Example: Fetch public info from GitHub (no authentication required for public endpoints)
async function fetchGitHubRepoInfo(owner, repo) {
  try {
    const url = `https://api.github.com/repos/${owner}/${repo}`;
    const response = await axios.get(url, {
      headers: { 'User-Agent': 'Wise-Old-Man-Bot' }
    });
    if (response.status === 200 && response.data) {
      const data = response.data;
      return `Repository: ${data.full_name}\nDescription: ${data.description}\n⭐ Stars: ${data.stargazers_count}\n🍴 Forks: ${data.forks_count}\n🔗 ${data.html_url}`;
    } else {
      return "I couldn't find that repository, young adventurer!";
    }
  } catch (error) {
    console.error('GitHub fetch error:', error);
    return "Something went wrong fetching from GitHub. Perhaps check the repository name?";
  }
}

// --- Quality of Life: Command prefix and help ---
const COMMAND_PREFIX = '!';

// Help command for users
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (!awakeChannels.has(message.channel.id)) return;

  if (message.content.trim() === `${COMMAND_PREFIX}help`) {
    message.reply(
      "**Wise Old Man's Guide:**\n" +
      "- Mention me or say 'cab' to wake me up!\n" +
      "- Ask about RuneScape 3 skills, bosses, quests, or mechanics.\n" +
      "- Use `github repo owner/repo` for GitHub info.\n" +
      "- Ask about Discord channels, roles, or permissions.\n" +
      "- Use voice chat and I'll join if you ask about group or private chats.\n" +
      "- Type `cab sleep` to let me rest.\n" +
      "- I will never help with real-world trading or forbidden topics.\n" +
      "- For a summary of recent wisdom, see my 'Wise Old Man's Notes'!"
    );
    return;
  }
});

// --- Quality of Life: Error reporting to owner ---
client.on('error', (err) => {
  console.error('Discord client error:', err);
  // Optionally DM the owner if you set OWNER_ID in your .env
  if (process.env.OWNER_ID) {
    client.users.fetch(process.env.OWNER_ID)
      .then(user => user.send(`Wise Old Man encountered an error: ${err.message}`))
      .catch(() => {});
  }
});

// --- Quality of Life: Logging important events ---
client.on('guildCreate', guild => {
  console.log(`Joined new guild: ${guild.name} (${guild.id})`);
});
client.on('guildDelete', guild => {
  console.log(`Removed from guild: ${guild.name} (${guild.id})`);
});

// --- Quality of Life: Friendly fallback for unknown commands ---
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (!awakeChannels.has(message.channel.id)) return;

  if (message.content.startsWith(COMMAND_PREFIX) && !message.content.startsWith('!adminsay') && !message.content.startsWith('!help')) {
    message.reply("I'm not sure what you mean, young adventurer! Try `!help` for a list of things I can do.");
  }
});

// --- Quality of Life: Remind about safe trading if trade is discussed ---
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (!awakeChannels.has(message.channel.id)) return;

  if (isInGameTrade(message.content)) {
    message.reply("Remember: Always double-check trades and use the Grand Exchange or secure in-game methods. If something seems too good to be true, it probably is!");
  }
});

// --- Quality of Life: Friendly greeting on startup ---
client.once('ready', () => {
  if (process.env.OWNER_ID) {
    client.users.fetch(process.env.OWNER_ID)
      .then(user => user.send("The Wise Old Man is awake and ready to help in your Discord server!"))
      .catch(() => {});
  }
});

// --- Self-Managed Storage: Let the bot create its own storage spaces and script files if needed ---
const path = require('path');

// Helper to ensure a directory exists
async function ensureDirectory(dirPath) {
  try {
    await fs.mkdir(dirPath, { recursive: true });
    return true;
  } catch (err) {
    console.error(`Failed to create directory ${dirPath}:`, err);
    return false;
  }
}

// Helper to ensure a file exists (creates if missing)
async function ensureFile(filePath, defaultContent = '') {
  try {
    await fs.access(filePath);
    // File exists
    return true;
  } catch {
    // File does not exist, create it
    try {
      await fs.writeFile(filePath, defaultContent, 'utf8');
      return true;
    } catch (err) {
      console.error(`Failed to create file ${filePath}:`, err);
      return false;
    }
  }
}

// Example: Ensure bot data and scripts folders exist on startup
client.once('ready', async () => {
  // ...existing code...

  // Self-managed storage setup
  const dataDir = path.join(__dirname, 'bot_data');
  const scriptsDir = path.join(__dirname, 'bot_scripts');
  await ensureDirectory(dataDir);
  await ensureDirectory(scriptsDir);

  // Example: Ensure a user memory file exists
  await ensureFile(path.join(dataDir, 'user_memory.json'), '{}');
  // Example: Ensure a script file exists for dynamic scripting
  await ensureFile(path.join(scriptsDir, 'custom_script.js'), '// Custom scripts can be placed here\n');
});

// Example command: Save a note to storage
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (!awakeChannels.has(message.channel.id)) return;

  if (message.content.startsWith('!save note ')) {
    const note = message.content.replace('!save note ', '').trim();
    const dataDir = path.join(__dirname, 'bot_data');
    const notesFile = path.join(dataDir, 'notes.json');
    let notes = {};
    try {
      await ensureFile(notesFile, '{}');
      notes = JSON.parse(await fs.readFile(notesFile, 'utf8'));
    } catch {}
    if (!notes[message.author.id]) notes[message.author.id] = [];
    notes[message.author.id].push({ note, time: Date.now() });
    await fs.writeFile(notesFile, JSON.stringify(notes, null, 2), 'utf8');
    message.reply("Your note has been saved in my magical archives!");
  }
});

// Example command: Let the bot create a new script file
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (!awakeChannels.has(message.channel.id)) return;

  if (message.content.startsWith('!create script ')) {
    const scriptName = message.content.replace('!create script ', '').trim().replace(/[^a-z0-9_\-\.]/gi, '');
    if (!scriptName.endsWith('.js')) {
      message.reply("Script name must end with `.js`.");
      return;
    }
    const scriptsDir = path.join(__dirname, 'bot_scripts');
    const scriptPath = path.join(scriptsDir, scriptName);
    const created = await ensureFile(scriptPath, '// New custom script\n');
    if (created) {
      message.reply(`Script file \`${scriptName}\` has been created in my scripts folder!`);
    } else {
      message.reply("I couldn't create the script file. Check my permissions!");
    }
  }
});

client.login(process.env.BOT_TOKEN);

const rs3Tips = [
  "Always bring food to boss fights.",
  "Check the Wiki for quest requirements.",
  // ...more tips...
];

// Reads/writes to Firebase as shown in previous answers
const snapshot = await db.ref('sharedMemory').once('value');
const data = snapshot.val();
// ...respond to changes...