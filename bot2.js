const { Client, IntentsBitField, PermissionsBitField, VoiceChannel } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource } = require('@discordjs/voice');
const translate = require('@vitalets/google-translate-api');
const math = require('mathjs');ts } = require('discord.js');
const natural = require('natural');
const fetch = require('node-fetch');
const fs = require('fs').promises;ts/google-translate-api');
const axios = require('axios');; // For fuzzy search, install with npm if needed
const path = require('path');
const admin = require('firebase-admin');
const COMMAND_PREFIX = '!';
// Load environment variables (API keys, tokens, etc.)
require('dotenv').config({ path: 'C:\\Users\\krist\\CelestialArtisansbot\\.env' });
admin.initializeApp({ credential: admin.credential.cert(require('./firebase-credentials.json')), databaseURL: "https://your-project.firebaseio.com" });
const db = admin.database();
    this.memory = [];
const client = new Client({s = [
  intents: new IntentsBitField([ directions: "Head to the nearest dig site and use your mattock on soil patches. Don't forget to screen your soil!" },
    IntentsBitField.Flags.Guilds,directions: "Teleport to each patch using your farming cape or lodestones. Plant, compost, and harvest in this order: herb, allotment, flower, tree." },
    IntentsBitField.Flags.GuildMessages,tions: "Enter Daemonheim, form a party, and select your floor. Use your map to navigate and solve puzzles as you go!" },
    IntentsBitField.Flags.GuildVoiceStates,eck your current task, gear up for the monster, and use the Slayer Tower or Slayer Dungeon portals for quick travel." },
    IntentsBitField.Flags.DirectMessages,eck your gear and inventory, eat up, and use the boss portal in War's Retreat. Remember to pray accordingly!" },
    IntentsBitField.Flags.MessageContent,ns: "Open your clue scroll, read the clue, and use the Wiki or Alt1 Clue Solver overlay for step-by-step help." },
    IntentsBitField.Flags.GuildMembersons: "Open the Yak Track interface, pick a task, and follow the instructions. Use the Wiki for Yak Track tips!" },
  ])  { trigger: /invention/i, directions: "Disassemble unwanted items, siphon your augmented gear, and use the Invention workbench for gizmos and perks." },
});   { trigger: /divination/i, directions: "Head to the highest-level wisp colony you can access, harvest memories, and convert them at the energy rift." }
    ];
// --- ADMIN ACCESS SETUP ---[];
// This function checks if the bot has admin permissions in the guild
async function ensureAdminAccess(guild) {l learning overlays by user
  try {
    const botMember = await guild.members.fetch(client.user.id);
    const hasAdmin = botMember.permissions.has(PermissionsBitField.Flags.Administrator);
    if (!hasAdmin) {(interaction);
      console.warn(`[ADMIN WARNING] The bot does not have Administrator permissions in guild: ${guild.name}`);
    }
    return hasAdmin;
  } catch (err) {ions(n = 5) {
    console.error('Error checking admin permissions:', err);
    return false;
  }
} matchActivity(text) {
    let found = this.supportedActivities.find(a => a.trigger.test(text));
const awakeChannels = new Map();
const botNames = ['cab', 'celestial', 'celestial artisans bot']; // Changed 'cob' to 'cab'
const chatMemory = new Map();
const learningModel = new natural.BayesClassifier();
const playerData = new Map();
const voiceConnections = new Map();
const thoughtCache = new Map();ions) {
    try {
      const regex = new RegExp(trigger, "i");
// Use DuckDuckGo Instant Answer API for public search (no API key required)
const CUSTOM_SEARCH_URL = 'https://api.duckduckgo.com/';
const RENDER_API_URL = 'https://api.duckduckgo.com/'; // Also fallback to DuckDuckGo
      return false;
client.once('ready', async () => {
  console.log('Radiant XP descends! Celestial Artisan\'s Goddess awakens at ' + new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' }));
  console.log('Accessible via ngrok: https://g.dev/Celestial_Artisan_bot');
  learningModel.addDocument('slayer runescape', 'skill');
  learningModel.addDocument('gp runescape', 'economy');words });
  learningModel.addDocument('quest runescape', 'quest');
  learningModel.addDocument('channel discord', 'discord');
  learningModel.addDocument('role discord', 'discord');
  learningModel.addDocument('voice discord', 'voice');values(RS_ITEM_MODELS)];
  learningModel.addDocument('player runescape', 'player');keywords'], threshold: 0.4 });
  learningModel.addDocument('how much runescape', 'economy');
  learningModel.addDocument('how many runescape', 'quest');ull;
  learningModel.addDocument('next step runescape', 'quest');
  learningModel.addDocument('price of runescape', 'economy');
  learningModel.addDocument('needed for runescape', 'quest');
  learningModel.train();s to item models by label or item name
  saveVisualNote(userId, note) {
  const dir = 'C:\\Users\\krist\\MyBot\\Pick_Of_Gods'; // <-- Fix: match actual folder name and casing
  try {If the label matches a learned item or model, link them
    const files = await fs.readdir(dir);e.label, Fuse);
    for (const file of files) {
      if (file.endsWith('.js') && file !== 'bot2.js') {
        const content = await fs.readFile(`${dir}\\${file}`, 'utf8');
        if (content.includes('discord') || content.includes('runescape')) {
          const lines = content.split('\n');
          lines.forEach(line => {
            const match = line.match(/(\w+)\s*[:=]\s*['"]?([^'"\n]+)['"]?/);
            if (match && (match[1].includes('command') || match[1].includes('response'))) {
              // Fix: Ensure legacy memory is a Set and add new values correctly
              if (!chatMemory.has('legacy')) chatMemory.set('legacy', new Set());
              chatMemory.get('legacy').add(match[2]);
            }tes(userId) {
          });is.visualNotes[userId] || [];
        }
      }
    }--- AI Self-Knowledge: List and explain all functions ---
  } catch (error) { {
    console.error('File read error:', error);
  }   "**RuneScape Alt1 AI Companion Capabilities:**",
      "- `quest overlay <quest>`: Fetches and overlays quest steps from the RuneScape Wiki. Use `next step` to advance.",
  // Self-managed storage setupinds and displays 2D/3D models and info for RuneScape items using local, learned, and external databases.",
  const dataDir = path.join(__dirname, 'bot_data');>`: Calculates and displays flipping profit margins using Flipaholics.",
  const scriptsDir = path.join(__dirname, 'bot_scripts');information.",
  await ensureDirectory(dataDir); Flipaholics for item prices.",
  await ensureDirectory(scriptsDir);.gg for item prices.",
      "- `translate <lang> <text>`: Translates text to the specified language.",
  // Example: Ensure a user memory file existsokup <query>`: Performs a general web search and provides instant answers and links.",
  await ensureFile(path.join(dataDir, 'user_memory.json'), '{}');ered by the AI.",
  // Example: Ensure a script file exists for dynamic scriptingnew activity and how to guide it.",
  await ensureFile(path.join(scriptsDir, 'custom_script.js'), '// Custom scripts can be placed here\n');ew item for recognition.",
});   "- `teach visual <label> | <x> | <y> | <width> | <height> | <color>`: Teach me to visually highlight a region in Alt1 overlays.",
      "- `show visuals`: Show your learned visual overlays in Alt1.",
// Shared memory file for overlay/data exchange only. The bot never clicks or types for you.",
const SHARED_MEMORY_FILE = path.join(__dirname, 'bot_data', 'shared_memory.json');Discord."
    ].join('\n');
// Helper to write to shared memory (used for overlay/data exchange)
async function writeToSharedMemory(data) {
  await db.ref('sharedMemory').set(data);
}

// Helper to read from shared memory// --- NOTE: ALT1 BOT DOES NOT USE MOUSE OR KEYBOARD ---
async function readFromSharedMemory() { search results are presented as text only.
  const snapshot = await db.ref('sharedMemory').once('value');, or interacts with the RuneScape client directly.
  return snapshot.val();nly provides overlays, links, and step-by-step instructions for the player to follow manually.
}
ion ---
// Example: When you want to send overlay/data to bot2.jsAlt1() {
async function sendOverlayToBot2(text, userId = null) {f window !== "undefined" && window.alt1 && window.alt1.permissionPixel;
  await writeToSharedMemory({
    type: 'overlay',
    text,function showAlt1Overlay(text) {
    userId,missions missing.";
    timestamp: Date.now()
  });(text);
}ns sent to your Alt1 overlay!";

// Example: When you want to read overlay/data from bot2.jst);
async function getOverlayFromBot2() {n in overlay (alert fallback).";
  const data = await readFromSharedMemory();
  if (data.type === 'overlay') {
    return data;// --- Online Search Helpers ---
  }
  return null;ics.pro/';
}

// --- MAIN MESSAGE HANDLER ---etchWikiData(query) {
client.on('messageCreate', async (message) => {ry {
  if (message.author.bot) return;onse = await fetch(`${RS_WIKI}w/index.php?search=${encodeURIComponent(query)}&fulltext=1`);
  if (!awakeChannels.has(message.channel.id)) return;   const text = await response.text();
    return text.includes('No results') ? "No results found on the Wiki." : `Check ${RS_WIKI}w/index.php?search=${encodeURIComponent(query)} for the scoop!`;
  // Example: Save overlay to shared memory when a command is received
  if (message.content.startsWith('!overlay ')) {
    const overlayText = message.content.replace('!overlay ', '').trim();g right now.';
    await sendOverlayToBot2(overlayText, message.author.id);
    message.reply("Overlay instructions sent to shared memory for Alt1 or bot2.js to use.");}
    return;
  }

  // Example: Read overlay from shared memory (could be used for status checks)ncodeURIComponent(query)}`);
  if (message.content.trim() === '!getoverlay') {
    const overlay = await getOverlayFromBot2();text.includes('not found') ? "No results found on Flipaholics." : `Flipaholics has this: ${FLIPAHOLICS}search?q=${encodeURIComponent(query)}`;
    if (overlay) { catch (error) {
      message.reply(`Current overlay: "${overlay.text}" (set by user ${overlay.userId})`);    console.error('Flipaholics error:', error);
    } else {
      message.reply("No overlay instructions found in shared memory.");
    }
    return;
  }

  const lowerContent = message.content.toLowerCase();t(query)}`);
  const isMentioned = botNames.some(name => lowerContent.includes(name));onst text = await response.text();
  const channelId = message.channel.id;text.includes('no results') ? "No results found on Ely.gg." : `Ely.gg dug up: ${ELY_GG}search?q=${encodeURIComponent(query)}`;
 catch (error) {
  // Maintain per-channel context for multi-room, multi-server support    console.error('Ely.gg error:', error);
  if (!chatMemory.has(channelId)) chatMemory.set(channelId, new Set());
  const channelMemory = chatMemory.get(channelId);
  const keywords = lowerContent.match(/\w+/g) || [];
  keywords.forEach(word => channelMemory.add(word));
  const learnedCategory = learningModel.getClassifications(lowerContent)[0]?.label || 'general';
  learningModel.addDocument(lowerContent, learnedCategory);
=';
  // Wake up on mention and stay active until told "cab sleep"lts?search_query=';
  if (isMentioned && !awakeChannels.has(channelId)) {/?q=';
    awakeChannels.set(channelId, true);
    message.reply("Ahh, greetings, young adventurer! The Wise Old Man is here—ask, and perhaps you'll learn a thing or two!");
    return;function buildSearchLinks(query) {
  }
ery)})`,
  // Stay in conversation until "cab sleep" is saidmponent(query)})`,
  if (awakeChannels.has(channelId)) {
    if (lowerContent.includes('cab sleep')) {t](${REDDIT_SEARCH}${encodeURIComponent(query)})`
      awakeChannels.delete(channelId);.join(' | ');
      if (voiceConnections.has(channelId)) {}
        const conn = voiceConnections.get(channelId);
        if (conn && typeof conn.destroy === 'function') conn.destroy();d) ---
        voiceConnections.delete(channelId);
      }
      message.reply("A nap, you say? Even the Wise Old Man needs his rest. Farewell for now, and may your bank remain untrimmed! Zzz...");i.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_redirect=1&no_html=1`);
      return;
    }
opics.length > 0 && data.RelatedTopics[0].Text)
    // --- GITHUB REPO INFO ---eturn data.RelatedTopics[0].Text;
    if (lowerContent.startsWith('github repo')) {
      const match = lowerContent.match(/github repo\s+([\w-]+)\/([\w.-]+)/); {
      if (match) {return null;
        const owner = match[1];  }
        const repo = match[2];
        const info = await fetchGitHubRepoInfo(owner, repo);
        message.reply(info);
        return;FlipProfitInfo(itemName) {
      }
    }
nent(itemName)}`;
    // --- ADMIN-ONLY COMMAND ---etch(flipUrl);
    if (message.content.startsWith('!adminsay')) {= await response.text();
      const botMember = await message.guild.members.fetch(client.user.id);
      if (!botMember.permissions.has(PermissionsBitField.Flags.Administrator)) {/ Simple regex to extract buy/sell prices (adjust as needed for actual site structure)
        return message.reply("Sorry, I need Administrator rights to do that, young adventurer!");    const buyMatch = text.match(/Buy Price:\s*([\d,]+)/i);
      }/Sell Price:\s*([\d,]+)/i);
      const sayMsg = message.content.slice('!adminsay'.length).trim();
      if (sayMsg) {
        message.channel.send(`(ADMIN ANNOUNCEMENT): ${sayMsg}`);
      } else {
        message.reply("What would you like me to say, wise one?");onst profit = sellPrice - buyPrice;
      }
      return;
    }ing()} gp\nSell Price: ${sellPrice.toLocaleString()} gp\nProfit per flip: ${profit.toLocaleString()} gp (${margin}% margin)\n[Flipaholics Link](${flipUrl})`;

    // --- HELP COMMAND ---hecking manually: ${flipUrl}`;
    if (message.content.trim() === `${COMMAND_PREFIX}help`) {
      message.reply(ror) {
        "**Wise Old Man's Guide:**\n" +return `Error fetching flip info for "${itemName}". Try checking manually: ${FLIPAHOLICS}search?q=${encodeURIComponent(itemName)}`;
        "- Mention me or say 'cab' to wake me up!\n" +  }
        "- Ask about RuneScape 3 skills, bosses, quests, or mechanics.\n" +
        "- Use `github repo owner/repo` for GitHub info.\n" +
        "- Ask about Discord channels, roles, or permissions.\n" +ough Fetcher & Overlay Stepper ---
        "- Use voice chat and I'll join if you ask about group or private chats.\n" +estName) {
        "- Type `cab sleep` to let me rest.\n" +
        "- I will never help with real-world trading or forbidden topics.\n" +Component(questName + " (quest)")}&prop=text&formatversion=2&format=json`;
        "- For a summary of recent wisdom, see my 'Wise Old Man's Notes'!"
      );
      return;
    }null;

    // --- PING COMMAND ---
    if (message.content.trim() === `${COMMAND_PREFIX}ping`) {t html = data.parse.text;
      message.reply("Pong! The Wise Old Man is listening."); regex to get list items (steps)
      return;onst steps = [];
    }    const stepRegex = /<li>(.*?)<\/li>/g;

    // --- RANDOM TIP COMMAND ---
    if (message.content.trim() === `${COMMAND_PREFIX}tip`) {
      const tip = rs3Tips[Math.floor(Math.random() * rs3Tips.length)];tepText = match[1].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim();
      message.reply(`Wise Old Man's Tip: ${tip}`); if (stepText.length > 10) steps.push(stepText);
      return;      if (steps.length >= 10) break; // Limit to first 10 steps for overlay
    }

    // --- UNKNOWN COMMAND FALLBACK ---
    if (message.content.startsWith(COMMAND_PREFIX) && !message.content.startsWith('!adminsay') && !message.content.startsWith('!help') && !message.content.startsWith('!ping') && !message.content.startsWith('!tip')) {
      message.reply("I'm not sure what you mean, young adventurer! Try `!help` for a list of things I can do.");
      return;
    }
 not actual clicks) ---
    // --- SAFE TRADING REMINDER ---
    if (isInGameTrade(message.content)) {
      message.reply("Remember: Always double-check trades and use the Grand Exchange or secure in-game methods. If something seems too good to be true, it probably is!");displayOverlayText) {
    }/ Show each step as a numbered instruction
    window.displayOverlayText(
    // --- VOICE JOIN ---1}. ${step}`).join('\n\n')
    if (learnedCategory === 'voice' && message.member.voice && message.member.voice.channel) {
      const voiceChannel = message.member.voice.channel;
      if (!voiceConnections.has(channelId)) {
        const connection = joinVoiceChannel({  alert(steps.map((step, i) => `${i + 1}. ${step}`).join('\n\n'));
          channelId: voiceChannel.id,wn in overlay (alert fallback).";
          guildId: message.guild.id,
          adapterCreator: message.guild.voiceAdapterCreator,
        });/3D) ---
        voiceConnections.set(channelId, connection);ust recognition
        message.reply("The Wise Old Man has joined your voice channel! Speak up, and I'll listen.");
      }
    }
TEMDB_API = "https://api.weirdgloop.org/exchange/history/rs/latest";
    // --- BOT-TO-BOT INFO ---item-details/search.json"; // Community-maintained, may be incomplete
    if (lowerContent.includes('bot')) {
      const messages = await message.channel.messages.fetch({ limit: 10 });Local Example Item Model Database (expand as needed) ---
      const botMessages = messages.filter(m => m.author.bot && m.id !== message.id); RS_ITEM_MODELS = {
      if (botMessages.size > 0) {  4151: {
        const info = botMessages.first().content;
        message.reply(`I overheard another bot say: "${info}"`);ges/Abyssal_whip.png",
        return;
      }
    }

    // --- MAIN Q&A/CONVERSATION LOGIC ---
    let actionTaken = false;
    let thoughtLog = `Thought[${new Date().toLocaleTimeString('en-US', { timeZone: 'America/Chicago' })}]: Author=${message.author.username}, Context=${learnedCategory}, Query="${message.content}"\n`;Helper: Search local, then external sources, with fuzzy search ---
 function findItemModel(query) {
    const isQuestion = /\?$/.test(message.content) || lowerContent.includes('what') || lowerContent.includes('where') || lowerContent.includes('how');  const q = query.toLowerCase();
    if (isQuestion) {
      const response = await researchOnline(message.content);tatic DB
      message.reply(response || "The stars withhold their wisdom—rephrase thy question!");
      thoughtLog += `Action: Researched online for "${message.content}"\n`;  const fuse = new Fuse(localItems, { keys: ['name', 'keywords'], threshold: 0.4 });
      actionTaken = true;
    } else {gth > 0) {
      const response = await chatResponse(message, channelMemory, keywords);
      if (response) {
        message.reply(response + " (spoken with the wisdom of many years!)");
        thoughtLog += "Action: General conversation\n";
        actionTaken = true;ch RuneScape Wiki API
      }
    }await fetch(`${RS_WIKI_API}?action=query&format=json&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=0`);

    // --- THOUGHT CACHE ---Data.query.search.length > 0) {
    if (message.guild) {iData.query.search[0].title;
      if (!thoughtCache.has(channelId)) thoughtCache.set(channelId, []);/ Try to get infobox image and item id
      thoughtCache.get(channelId).push(thoughtLog); const pageResp = await fetch(`${RS_WIKI_API}?action=parse&page=${encodeURIComponent(pageTitle)}&format=json&prop=images`);
      if (thoughtCache.get(channelId).length > 5) thoughtCache.get(channelId).shift();      const pageData = await pageResp.json();
      const compactCache = thoughtCache.get(channelId).join('').replace(/\n+/g, ' | ');
      message.channel.send(`Wise Old Man's Notes: ${compactCache}`); && pageData.parse.images) {
    }/i.test(i));
  } else if (message.guild) {mages/${encodeURIComponent(img)}`;
    // Fallback for non-awake channels
    if (channelMemory.has('discord')) {
      message.reply("Ah, Discord! In my day, we just used carrier pigeons. Ask me about channels, roles, invites, or permissions—I've picked up a trick or two over the years.");
    } else if (channelMemory.has('runescape') || channelMemory.has('rs')) {   name: pageTitle,
      message.reply("RuneScape, eh? Now that's a name I haven't heard in a long time. Need help with quests, skills, or gear? The Wise Old Man is here to help—just don't ask me to trim your bank!");tps://runescape.wiki/",
    }e.com/3d-model-viewer?item=${encodeURIComponent(pageTitle)}`,
  }e()],
});

// Alt1 detection and navigation helpers
let isAlt1 = false;atch (e) {
let alt1NavigateTo = () => false; // Default: do nothing // Ignore and try next source

if (typeof window !== "undefined" && window.alt1) {
  isAlt1 = window.alt1 && window.alt1.permissionPixel;r item IDs and names)
  alt1NavigateTo = function(panel) {
    // Example: Open a panel or highlight something in Alt1
    if (!isAlt1) return false;    const dbData = await dbResp.json();
    if (panel === "home") {
      window.location.hash = "#home";
      alt1.info("The Wise Old Man has whisked you to the home panel!");
      return true;
    }e() === q ||
    if (panel === "settings") {Case().includes(q)
      window.location.hash = "#settings";
      alt1.info("Settings, eh? In my day, we just hit things until they worked!");
      return true;
    }     id,
    // Add more navigation as needed
    return false;pe.com/m=itemdb_rs/obj_big.gif?id=${id}`,
  };
}: [item.name.toLowerCase()],
     source: "weirdgloop"
async function chatResponse(message, memory, keywords) {
  const content = message.content;
  const lowerContent = content.toLowerCase();}
  const sentiment = new natural.SentimentAnalyzer('English', natural.PorterStemmer, 'afinn').getSentiment(keywords); } catch (e) {
    // Ignore and try next source
  if (lowerContent.includes('discord')) {
    return "With the wisdom of many years, I say: Discord is a fine tool for gathering adventurers. What do you wish to know, young one?";
  } else if (lowerContent.includes('runescape') || lowerContent.includes('rs')) {PI (fallback)
    const category = learningModel.getClassifications(lowerContent)[0].label;
    return `Ah, RuneScape! I remember when ${category} was all the rage. What more can I tell you, friend?`;    const osrsboxResp = await fetch(OSRSBOX_API);
  } else if (lowerContent.includes('hey') || lowerContent.includes('hi')) {.json();
    return `Hello there! The Wise Old Man greets you warmly. I sense your mood is ${sentiment > 0 ? 'bright as a freshly polished rune' : 'a bit gloomy—cheer up, it could be worse!'}`;
  } else if (memory.has(lowerContent.split(' ')[0]) || (memory.get('legacy') && memory.get('legacy').has(lowerContent.split(' ')[0]))) {
    return `You've mentioned ${lowerContent.split(' ')[0]} before, haven't you? The Wise Old Man never forgets... well, almost never.`;
  }
  return "The world is full of mysteries! Ask away, and perhaps this old wizard can help.";
}

async function fetchHiscoreData(playerName) {
  try {     return {
    const response = await fetch(`https://secure.runescape.com/m=hiscore/index_lite.ws?player=${encodeURIComponent(playerName)}`);
    if (response.ok) {         name: item.name,
      const text = await response.text();          icon2d: item.icon || "",
      const lines = text.trim().split('\n');/3d-model-viewer?item=${id}`,
      if (lines.length > 0) {   keywords: [item.name.toLowerCase()],
        const overall = lines[0].split(',').map(Number);
        return { rank: overall[0], level: overall[1], xp: overall[2] };
      }
    }
  } catch (error) {
    console.error('Hiscore fetch error:', error);
  }
  return null;
}urn null;

async function fetchRunemetricsData(playerName) {
  try {--- Quest Overlay Step Navigation (queue/step-by-step) ---
    const response = await fetch(`https://apps.runescape.com/runemetrics/profile/profile?user=${encodeURIComponent(playerName)}&activities=20`);ache = {};
    if (response.ok) {
      const data = await response.json();const client = new Client({
      return data;
    }ewayIntentBits.Guilds,
  } catch (error) {
    console.error('Runemetrics fetch error:', error);MessageContent,
  }
  return null;its.DirectMessages
}

// Enhance knowledge base for RuneScape 3
learningModel.addDocument('archaeology runescape', 'skill');ent.once('ready', () => {
learningModel.addDocument('invention runescape', 'skill');`Celestial Artisan's AI Companion (Alt1 Overlay Mode) is online at ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}`);
learningModel.addDocument('elite dungeons runescape', 'pvm'););
learningModel.addDocument('boss mechanics runescape', 'pvm');
learningModel.addDocument('best money making runescape', 'economy');=> {
learningModel.addDocument('double xp runescape', 'event');
learningModel.addDocument('yak track runescape', 'event');
learningModel.addDocument('clue scroll runescape', 'activity');ge.content, time: Date.now() });
learningModel.addDocument('achievement runescape', 'achievement');
learningModel.addDocument('comp cape runescape', 'achievement');
learningModel.addDocument('reaper title runescape', 'pvm');
learningModel.addDocument('slayer codex runescape', 'collection');| <height> | <color>
learningModel.addDocument('quest cape runescape', 'achievement');'').split('|');
learningModel.addDocument('skilling pets runescape', 'pet');
learningModel.addDocument('rare drop table runescape', 'drop');<y> | <width> | <height> | <color>");
learningModel.addDocument('ge price runescape', 'economy');
learningModel.addDocument('grand exchange runescape', 'economy');
learningModel.addDocument('dailyscape runescape', 'routine');trim());
learningModel.addDocument('vis wax runescape', 'routine'); Number(width), height: Number(height), color };
learningModel.addDocument('warbands runescape', 'activity');
learningModel.addDocument('pof runescape', 'activity');bel}" at (${x},${y},${width},${height}) in ${color}.`);
learningModel.addDocument('player owned farm runescape', 'activity');
learningModel.addDocument('player owned ports runescape', 'activity');
learningModel.addDocument('pvm guides runescape', 'pvm');
learningModel.addDocument('boss timers runescape', 'pvm');
learningModel.addDocument('aura management runescape', 'meta');
learningModel.addDocument('ability rotations runescape', 'meta');
learningModel.addDocument('revolution++ runescape', 'meta');
learningModel.addDocument('combat styles runescape', 'meta');ual overlays yet.");
learningModel.addDocument('enrage mechanics runescape', 'pvm');
learningModel.addDocument('hardmode bosses runescape', 'pvm');
learningModel.addDocument('elite clues runescape', 'activity');
learningModel.addDocument('treasure trails runescape', 'activity');
learningModel.addDocument('farming runs runescape', 'routine'); v.color, v.label);
learningModel.addDocument('herb runs runescape', 'routine');
learningModel.addDocument('dungeoneering runescape', 'skill');
learningModel.addDocument('arch-glacor runescape', 'boss');
learningModel.addDocument('zamorak boss runescape', 'boss');
learningModel.addDocument('telos runescape', 'boss');d item models:**\n";
learningModel.addDocument('solak runescape', 'boss');
learningModel.addDocument('nex angel of death runescape', 'boss'); | [3D Model](${v.linkedItem.model3d})`
learningModel.addDocument('ed3 runescape', 'pvm');
learningModel.addDocument('ed2 runescape', 'pvm');
learningModel.addDocument('ed1 runescape', 'pvm');
learningModel.addDocument('runescore runescape', 'achievement');rlays have been rendered in Alt1.");
learningModel.addDocument('max cape runescape', 'achievement');
learningModel.addDocument('trimmed comp runescape', 'achievement');
learningModel.addDocument('pvm drop log runescape', 'drop');ly be shown in Alt1 overlays that support box rendering.");
learningModel.addDocument('drop rates runescape', 'drop');
learningModel.addDocument('boss pets runescape', 'pet');
learningModel.addDocument('skilling outfits runescape', 'meta');
learningModel.addDocument('xp rates runescape', 'meta');
learningModel.addDocument('best perks runescape', 'meta');
learningModel.addDocument('perks invention runescape', 'meta');' || content === 'what can you do' || content === 'features') {
learningModel.addDocument('ancient magicks runescape', 'magic');
learningModel.addDocument('prayer switching runescape', 'meta');
learningModel.addDocument('overloads runescape', 'meta');
learningModel.addDocument('scrimshaws runescape', 'meta');
learningModel.addDocument('sigils runescape', 'meta');
learningModel.addDocument('reaper assignments runescape', 'pvm');
learningModel.addDocument('slayer tasks runescape', 'skill');
learningModel.addDocument('elite skill runescape', 'skill');
learningModel.addDocument('archaeology mysteries runescape', 'activity');
learningModel.addDocument('archaeology collections runescape', 'collection');tions}\n${isAlt1() ? overlayResult : "(Open this bot in Alt1 for overlay instructions!)"}`);
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
    /buy.*gold/i,LowestPlayerNameFromChatbox();
    /sell.*gold/i,    }
    /buy.*account/i,
    /sell.*account/i,split(' ');
    /buy.*item/i,rts.length > 2 ? parts.slice(2).join(' ') : null;
    /sell.*item/i,
    /rwt/i,e) {
    /real.?world.?trade/i,l.send("Couldn't detect a player name from the chatbox. Please specify a name, e.g. `wiki playercalc Zezima`");
    /gp for (money|cash|usd|eur|paypal|bitcoin|btc|crypto)/i,
    /account shop/i,
    /item shop/i,ttps://runescape.wiki/?search=${encodeURIComponent(playerName)}&title=Special%3APlayer+Calculator`;
    /osrs/i, // Focus only on RS3, not OSRS.channel.send(`Player calculator for **${playerName}**: ${url}`);
    /old school/i,
    /real[-\s]?money/i,
    /irl\s*(money|cash|usd|eur|paypal|bitcoin|btc|crypto)/iWith('wiki ')) {
  ]; message.content.slice(5).trim();
  return forbidden.some(rx => rx.test(text));query);
}l.send(wikiResult);

// Helper to check for in-game trading (allowed)
function isInGameTrade(text) { (content.startsWith('flip ')) {
  // Looks for GE, Grand Exchange, or player-to-player trade languageim();
  const allowed = [   const flipResult = await fetchFlipaholicsData(query);
    /grand exchange/i,    message.channel.send(flipResult);
    /\bge\b/i,
    /trade.*(player|friend|other)/i,
    /player.*trade/i,
    /in[-\s]?game.*trade/i,essage.content.slice(4).trim();
    /selling.*in game/i,await fetchElyGGData(query);
    /buying.*in game/i,annel.send(elyResult);
    /offer.*(ge|grand exchange)/i
  ];
  return allowed.some(rx => rx.test(text));
}kGo for any other queries
it fetchDuckDuckGo(message.content);
// --- Modify researchOnline to focus on RS3 and filter forbidden topics ---
async function researchOnline(query) {message.channel.send(ddgResult + "\n\n" + buildSearchLinks(message.content));
  // Always focus on RuneScape 3, and filter forbidden topics
  if (isForbiddenRS3Topic(query)) {   message.channel.send("No results found. Try being more specific or check the spelling.");
    return "Sorry, young adventurer, I cannot assist with buying or selling gold, accounts, or items for real-world money. Such things are forbidden by the laws of Gielinor!";  }
  }
  if (isInGameTrade(query)) {
    return "Trading with other players or using the Grand Exchange is a core part of RuneScape 3! If you need tips on safe in-game trading, just ask.";  }  const rs3Query = `${query} runescape 3`;  try {    // DuckDuckGo Instant Answer API (no key required)    const ddgResponse = await axios.get(CUSTOM_SEARCH_URL, {      params: {        q: rs3Query,        format: 'json',        no_redirect: 1,        no_html: 1,        skip_disambig: 1      }    });    if (ddgResponse.data.AbstractText) {      if (isForbiddenRS3Topic(ddgResponse.data.AbstractText)) {        return "The Wise Old Man will not speak of forbidden trades or dealings!";      }      const firstTopic = ddgResponse.data.RelatedTopics[0];      if (typeof firstTopic.Text === 'string' && !isForbiddenRS3Topic(firstTopic.Text)) {        return `A bit of wisdom from my travels: ${firstTopic.Text}`;      }    }    return "Even the Wise Old Man can't find an answer to that—try asking differently!";  } catch (error) {    console.error('Research error:', error);    return "My old brain is a bit foggy—try again, or maybe fetch me a nice cup of tea!";  }}// --- Modify searchRunescapeKnowledge to filter forbidden topics ---async function searchRunescapeKnowledge(intent, itemOrQuest) {  const combined = `${intent} ${itemOrQuest}`;  if (isForbiddenRS3Topic(combined)) {    return "Sorry, young adventurer, I cannot assist with buying or selling gold, accounts, or items for real-world money. Such things are forbidden by the laws of Gielinor!";  }  if (isInGameTrade(combined)) {    return "Trading with other players or using the Grand Exchange is perfectly fine in RuneScape 3! Always use safe in-game methods and beware of scams.";  }  try {    // Prefer RuneScape Wiki API for RS3    const wikiApiUrl = `https://runescape.wiki/api.php?action=query&format=json&prop=extracts&exintro&explaintext&titles=${encodeURIComponent(itemOrQuest)}`;    const wikiResponse = await fetch(wikiApiUrl);    const wikiData = await wikiResponse.json();    const pages = wikiData.query && wikiData.query.pages ? Object.values(wikiData.query.pages) : [];    const extract = pages.length && pages[0].extract ? pages[0].extract : '';    if (extract && !isForbiddenRS3Topic(extract)) {      return `From the annals of the RuneScape 3 Wiki:\n${extract}`;    }    // Fallback to custom search if wiki fails    const searchQuery = `${intent} ${itemOrQuest} runescape 3`;    const response = await axios.get(CUSTOM_SEARCH_URL, {      params: {        q: searchQuery,        num: 1      }    });    const result = response.data.items?.[0]?.snippet || '';    if (isForbiddenRS3Topic(result)) {      return "The Wise Old Man will not speak of forbidden trades or dealings!";    }    if (isInGameTrade(result)) {      return "Trading with other players or using the Grand Exchange is a core part of RuneScape 3! If you need tips on safe in-game trading, just ask.";    }    if (intent.includes('how much') || intent.includes('price of')) {      return `Divine riches! The price of ${itemOrQuest} is nigh ${extractPrice(result) || 'unknown'} gp—consult the Grand Exchange!`;    } else if (intent.includes('how many') || intent.includes('needed for')) {      return `Celestial decree! Thou requirest ${extractQuantity(result) || 'an uncertain tally'} of ${itemOrQuest}—seek the scrolls!`;    } else if (intent.includes('next step')) {      return `Questing under my gaze! Thy next step in ${itemOrQuest} is ${extractStep(result) || 'veiled in stardust'}—proceed, mortal!`;    } else if (result) {      return `RuneScape 3 wisdom: ${result}`;    }    return "My celestial search dims—try anew, seeker!";  } catch (error) {    console.error('Custom search error:', error);    return "My celestial search dims—try anew, seeker!";  }}function extractPrice(text) {  const match = text.match(/(\d{1,3}(?:,\d{3})*(?:\.\d+)?)\s*gp/i);  return match ? match[1] : null;}function extractQuantity(text) {  const match = text.match(/(\d+)\s*(?:x|items)/i);  return match ? match[1] : null;}function extractStep(text) {  const match = text.match(/next step[:\s]*(.+?)(?=\.|$)/i);  return match ? match[1].trim() : null;}async function connectToPlayerSearch(displayName) {  try {    let runemetricsData = await fetchRunemetricsData(displayName);    if (runemetricsData && runemetricsData.name) {      return `Ah, ${displayName}! According to my dusty tomes: Rank ${runemetricsData.skills?.overall?.rank || 'N/A'}, Level ${runemetricsData.skills?.overall?.level || 'N/A'}, XP ${runemetricsData.skills?.overall?.xp || 'N/A'}. Anything else, young whippersnapper?`;    }    let hiscoreData = await fetchHiscoreData(displayName);    if (hiscoreData) {      return `Found ${displayName} in the Hiscores! Rank: ${hiscoreData.rank}, Level: ${hiscoreData.level}, XP: ${hiscoreData.xp}. Not bad for a youngster!`;    }    return "Hmm, can't find that adventurer. Maybe they're hiding, or maybe my spectacles need cleaning!";  } catch (error) {    console.error('Player search error:', error);    return "Oh dear, something went wrong with my search. Try again, or bring me a cup of tea!";  }}// Example: Fetch public info from GitHub (no authentication required for public endpoints)async function fetchGitHubRepoInfo(owner, repo) {  try {    const url = `https://api.github.com/repos/${owner}/${repo}`;    const response = await axios.get(url, {      headers: { 'User-Agent': 'Wise-Old-Man-Bot' }    });    if (response.status === 200 && response.data) {      const data = response.data;      return `Repository: ${data.full_name}\nDescription: ${data.description}\n⭐ Stars: ${data.stargazers_count}\n🍴 Forks: ${data.forks_count}\n🔗 ${data.html_url}`;    } else {      return "I couldn't find that repository, young adventurer!";    }  } catch (error) {    console.error('GitHub fetch error:', error);    return "Something went wrong fetching from GitHub. Perhaps check the repository name?";  }}// --- Quality of Life: Command prefix and help ---const COMMAND_PREFIX = '!';// Help command for usersclient.on('messageCreate', async (message) => {  if (message.author.bot) return;  if (!awakeChannels.has(message.channel.id)) return;  if (message.content.trim() === `${COMMAND_PREFIX}help`) {    message.reply(      "**Wise Old Man's Guide:**\n" +      "- Mention me or say 'cab' to wake me up!\n" +      "- Ask about RuneScape 3 skills, bosses, quests, or mechanics.\n" +      "- Use `github repo owner/repo` for GitHub info.\n" +      "- Ask about Discord channels, roles, or permissions.\n" +      "- Use voice chat and I'll join if you ask about group or private chats.\n" +      "- Type `cab sleep` to let me rest.\n" +      "- I will never help with real-world trading or forbidden topics.\n" +      "- For a summary of recent wisdom, see my 'Wise Old Man's Notes'!"    );    return;  }});// --- Quality of Life: Error reporting to owner ---client.on('error', (err) => {  console.error('Discord client error:', err);  // Optionally DM the owner if you set OWNER_ID in your .env  if (process.env.OWNER_ID) {    client.users.fetch(process.env.OWNER_ID)      .then(user => user.send(`Wise Old Man encountered an error: ${err.message}`))      .catch(() => {});  }});// --- Quality of Life: Logging important events ---client.on('guildCreate', guild => {  console.log(`Joined new guild: ${guild.name} (${guild.id})`);});client.on('guildDelete', guild => {  console.log(`Removed from guild: ${guild.name} (${guild.id})`);});// --- Quality of Life: Friendly fallback for unknown commands ---client.on('messageCreate', async (message) => {  if (message.author.bot) return;  if (!awakeChannels.has(message.channel.id)) return;  if (message.content.startsWith(COMMAND_PREFIX) && !message.content.startsWith('!adminsay') && !message.content.startsWith('!help')) {    message.reply("I'm not sure what you mean, young adventurer! Try `!help` for a list of things I can do.");  }});// --- Quality of Life: Remind about safe trading if trade is discussed ---client.on('messageCreate', async (message) => {  if (message.author.bot) return;  if (!awakeChannels.has(message.channel.id)) return;  if (isInGameTrade(message.content)) {    message.reply("Remember: Always double-check trades and use the Grand Exchange or secure in-game methods. If something seems too good to be true, it probably is!");  }});// --- Quality of Life: Friendly greeting on startup ---client.once('ready', () => {  if (process.env.OWNER_ID) {    client.users.fetch(process.env.OWNER_ID)      .then(user => user.send("The Wise Old Man is awake and ready to help in your Discord server!"))      .catch(() => {});  }});// --- Self-Managed Storage: Let the bot create its own storage spaces and script files if needed ---const path = require('path');// Helper to ensure a directory existsasync function ensureDirectory(dirPath) {  try {    await fs.mkdir(dirPath, { recursive: true });    return true;  } catch (err) {    console.error(`Failed to create directory ${dirPath}:`, err);    return false;  }}// Helper to ensure a file exists (creates if missing)async function ensureFile(filePath, defaultContent = '') {  try {    await fs.access(filePath);    // File exists    return true;  } catch {    // File does not exist, create it    try {      await fs.writeFile(filePath, defaultContent, 'utf8');      return true;    } catch (err) {      console.error(`Failed to create file ${filePath}:`, err);      return false;    }  }}// Example: Ensure bot data and scripts folders exist on startupclient.once('ready', async () => {  // ...existing code...  // Self-managed storage setup  const dataDir = path.join(__dirname, 'bot_data');  const scriptsDir = path.join(__dirname, 'bot_scripts');  await ensureDirectory(dataDir);  await ensureDirectory(scriptsDir);  // Example: Ensure a user memory file exists  await ensureFile(path.join(dataDir, 'user_memory.json'), '{}');  // Example: Ensure a script file exists for dynamic scripting  await ensureFile(path.join(scriptsDir, 'custom_script.js'), '// Custom scripts can be placed here\n');});// Example command: Save a note to storageclient.on('messageCreate', async (message) => {  if (message.author.bot) return;  if (!awakeChannels.has(message.channel.id)) return;  if (message.content.startsWith('!save note ')) {    const note = message.content.replace('!save note ', '').trim();    const dataDir = path.join(__dirname, 'bot_data');    const notesFile = path.join(dataDir, 'notes.json');    let notes = {};    try {      await ensureFile(notesFile, '{}');      notes = JSON.parse(await fs.readFile(notesFile, 'utf8'));    } catch {}    if (!notes[message.author.id]) notes[message.author.id] = [];    notes[message.author.id].push({ note, time: Date.now() });    await fs.writeFile(notesFile, JSON.stringify(notes, null, 2), 'utf8');    message.reply("Your note has been saved in my magical archives!");  }});// Example command: Let the bot create a new script fileclient.on('messageCreate', async (message) => {  if (message.author.bot) return;  if (!awakeChannels.has(message.channel.id)) return;  if (message.content.startsWith('!create script ')) {    const scriptName = message.content.replace('!create script ', '').trim().replace(/[^a-z0-9_\-\.]/gi, '');    if (!scriptName.endsWith('.js')) {      message.reply("Script name must end with `.js`.");      return;    }    const scriptsDir = path.join(__dirname, 'bot_scripts');    const scriptPath = path.join(scriptsDir, scriptName);    const created = await ensureFile(scriptPath, '// New custom script\n');    if (created) {      message.reply(`Script file \`${scriptName}\` has been created in my scripts folder!`);    } else {      message.reply("I couldn't create the script file. Check my permissions!");    }  }});client.login(process.env.BOT_TOKEN);const rs3Tips = [  "Always bring food to boss fights.",  "Check the Wiki for quest requirements.",  // ...more tips...];
<!DOCTYPE html>
<html>
<head>
  <title>RuneScape AI Overlay (Alt1)</title>
  <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-database-compat.js"></script>
  <style>
    body { background: #222; color: #fff; font-family: Arial, sans-serif; }
    #overlay { border: 2px solid #ffd700; background: #333; padding: 20px; margin: 30px auto; width: 500px; min-height: 100px; }
  </style>
</head>
<body>
  <div id="overlay">Waiting for AI overlay...</div>
  <input type="file" id="upload" accept="image/*" style="margin:20px;">
  <button onclick="sendScreenshotToAI()">Analyze Screenshot</button>
  <script>
    // 1. Firebase config (replace with your own)
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
      databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_PROJECT_ID.appspot.com",
      messagingSenderId: "YOUR_SENDER_ID",
      appId: "YOUR_APP_ID"
    };
    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();

    // 2. Listen for overlay instructions from Firebase (set by your bot/AI)
    db.ref('sharedMemory').on('value', (snapshot) => {
      const data = snapshot.val();
      if (data && data.type === 'overlay') {
        document.getElementById('overlay').innerText = data.text;
      }
    });

    // 3. (Optional) Send screenshot to your AI backend for vision tasks
    async function sendScreenshotToAI() {
      const fileInput = document.getElementById('upload');
      if (!fileInput.files.length) {
        alert('Please select an image (screenshot) first!');
        return;
      }
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = async function(e) {
        const base64Image = e.target.result.split(',')[1];
        // Send to your Node.js backend or directly to Vertex AI endpoint
        // Example: POST to your backend API
        const response = await fetch('https://your-backend-or-cloud-function/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: base64Image })
        });
        const result = await response.json();
        document.getElementById('overlay').innerText = result.overlayText || "AI did not return overlay info.";
      };
      reader.readAsDataURL(file);
    }
  </script>
</body>
</html>